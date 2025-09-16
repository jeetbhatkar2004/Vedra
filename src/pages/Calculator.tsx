import React, { useMemo, useState } from 'react';

type UniversityType = 'Private' | 'Public';

const inr = new Intl.NumberFormat('en-IN', {
	style: 'currency',
	currency: 'INR',
	maximumFractionDigits: 2,
});

function calculateTotals(estimatedDois: number, universityType: UniversityType) {
	const dois = isFinite(estimatedDois) && estimatedDois > 0 ? estimatedDois : 0;
	const isPrivate = String(universityType).toUpperCase() === 'PRIVATE';

	// mVedra pricing
	const mVedraAnnual = dois * 50 + (isPrivate ? 40000 : 20000);

	// Competitors (including infrastructure costs to match mVedra capability)
	const infra = 300000;
	const otherIndianAnnual = 20000 + dois * 120 + infra;
	const foreignAnnual = 150000 + 88 * dois + infra;

	// Savings with mVedra
	const savingsVsIndian = Math.max(otherIndianAnnual - mVedraAnnual, 0);
	const savingsVsForeign = Math.max(foreignAnnual - mVedraAnnual, 0);

	const pctVsIndian = otherIndianAnnual > 0 ? (savingsVsIndian / otherIndianAnnual) * 100 : 0;
	const pctVsForeign = foreignAnnual > 0 ? (savingsVsForeign / foreignAnnual) * 100 : 0;

	return {
		mVedraAnnual,
		otherIndianAnnual,
		foreignAnnual,
		savingsVsIndian,
		savingsVsForeign,
		pctVsIndian,
		pctVsForeign,
	};
}

function BarChart({ pctIndian, pctForeign }: { pctIndian: number; pctForeign: number }) {
	const data = [
		{ label: 'vs Other Indian Publishers', value: pctIndian, color: '#dc2626' },
		{ label: 'vs Foreign DOI Agencies', value: pctForeign, color: '#0ea5e9' },
	];

	const maxValue = Math.max(100, ...data.map(d => d.value));
	const barWidth = 140;
	const barGap = 80;
	const padLeft = 56; // extra room for y-axis labels
	const padRight = 24;
	const padTop = 16; // extra top padding so 100% is fully visible
	const chartHeight = 320;
	const chartWidth = data.length * barWidth + (data.length - 1) * barGap + padLeft + padRight;

	return (
		<div className="w-full overflow-x-auto">
			<svg width={chartWidth} height={padTop + chartHeight + 60} role="img" aria-label="Savings percentage chart">
				{/* Axes */}
				<line x1={padLeft} y1={padTop + chartHeight} x2={chartWidth - padRight} y2={padTop + chartHeight} stroke="#e5e7eb" />
				{[0, 20, 40, 60, 80, 100].map(t => {
					const y = padTop + chartHeight - (t / maxValue) * chartHeight;
					return (
						<g key={t}>
							<line x1={padLeft} y1={y} x2={chartWidth - padRight} y2={y} stroke="#f3f4f6" />
							<text x={8} y={y + 4} textAnchor="start" fontSize={12} fill="#6b7280">{t}%</text>
						</g>
					);
				})}

				{data.map((d, i) => {
					const x = padLeft + i * (barWidth + barGap);
					const h = Math.max(0, (d.value / maxValue) * chartHeight);
					const y = padTop + chartHeight - h;
					return (
						<g key={d.label}>
							<rect x={x} y={y} width={barWidth} height={h} fill={d.color} rx={6} />
							{/* Value label above bar */}
							<text x={x + barWidth / 2} y={Math.max(padTop + 12, y - 8)} textAnchor="middle" fontWeight={600} fill="#111827">
								{d.value.toFixed(2)}%
							</text>
							{/* Category label */}
							<text x={x + barWidth / 2} y={padTop + chartHeight + 24} textAnchor="middle" fontSize={13} fill="#374151">
								{d.label}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
}

export default function Calculator() {
	const [estimatedDois, setEstimatedDois] = useState<number>(10000);
	const [universityType, setUniversityType] = useState<UniversityType>('Private');

	const totals = useMemo(() => calculateTotals(estimatedDois, universityType), [estimatedDois, universityType]);

	return (
		<div className="px-4 sm:px-6 lg:px-8 py-10">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl font-bold text-vedra-hunter mb-2">University Savings Calculator</h1>
				<p className="text-gray-600 mb-8">Estimate how much you save with mVedra compared to alternatives.</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
					<div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
						<label className="block text-sm font-medium text-gray-700 mb-1">Estimated DOIs per Year</label>
						<input
							type="number"
							min={0}
							className="w-full rounded-lg border-gray-300 focus:border-vedra-hunter focus:ring-vedra-hunter"
							value={estimatedDois}
							onChange={e => setEstimatedDois(Number(e.target.value))}
						/>
						<p className="text-xs text-gray-500 mt-1">Tip: This can be the total number of graduates per year (assuming each submits one project/thesis/dissertation).</p>
					</div>
					<div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
						<label className="block text-sm font-medium text-gray-700 mb-1">Choose Public or Private University</label>
						<select
							className="w-full rounded-lg border-gray-300 focus:border-vedra-hunter focus:ring-vedra-hunter"
							value={universityType}
							onChange={e => setUniversityType(e.target.value as UniversityType)}
						>
							<option value="Private">Private</option>
							<option value="Public">Public</option>
						</select>
					</div>
				</div>

				{/* Results - Only show savings */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
					<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
						<h2 className="text-lg font-semibold text-gray-800 mb-2">Savings vs Other Indian Publishers</h2>
						<p className="text-2xl font-bold text-vedra-hunter">{inr.format(totals.savingsVsIndian)}</p>
						<p className="text-sm text-gray-500">{totals.pctVsIndian.toFixed(2)}% saved</p>
					</div>
					<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
						<h2 className="text-lg font-semibold text-gray-800 mb-2">Savings vs Foreign DOI Registration Agencies</h2>
						<p className="text-2xl font-bold text-vedra-hunter">{inr.format(totals.savingsVsForeign)}</p>
						<p className="text-sm text-gray-500">{totals.pctVsForeign.toFixed(2)}% saved</p>
					</div>
				</div>

				<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Savings Overview</h3>
					<BarChart pctIndian={totals.pctVsIndian} pctForeign={totals.pctVsForeign} />
					<p className="text-xs text-gray-500 mt-4">Chart shows percentage saved with mVedra over each alternative. Values include comparable infrastructure costs.</p>
				</div>
			</div>
		</div>
	);
}


