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
	const infra = 500000;
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

function BarChart({ mVedraAnnual, otherIndianAnnual, foreignAnnual }: { mVedraAnnual: number; otherIndianAnnual: number; foreignAnnual: number }) {
    // Convert values to Lakhs for y-axis units
    const data = [
        { label: 'mVedra Annual Cost', value: mVedraAnnual / 100000, color: '#16a34a' }, // green
        { label: 'Other Indian Publishers', value: otherIndianAnnual / 100000, color: '#dc2626' }, // red
        { label: 'Foreign DOI Agencies', value: foreignAnnual / 100000, color: '#0ea5e9' }, // blue
    ];

    const maxValue = Math.max(...data.map(d => d.value), 1);
    // Create a "nice" upper bound for ticks (in Lakhs)
    const niceMax = Math.ceil((maxValue + 0.1) / 5) * 5; // steps of 5 Lakhs

    const barWidth = 140;
    const barGap = 80;
    const padLeft = 72; // extra room for ₹ labels
    const padRight = 24;
    const padTop = 16;
    const chartHeight = 320;
    const chartWidth = data.length * barWidth + (data.length - 1) * barGap + padLeft + padRight;

    const ticks = [0, 0.2, 0.4, 0.6, 0.8, 1].map(t => t * niceMax);

    return (
        <div className="w-full overflow-x-auto">
            <svg width={chartWidth} height={padTop + chartHeight + 60} role="img" aria-label="Annual cost comparison chart (in Lakhs)">
                {/* Axes */}
                <line x1={padLeft} y1={padTop + chartHeight} x2={chartWidth - padRight} y2={padTop + chartHeight} stroke="#e5e7eb" />
                {ticks.map(t => {
                    const y = padTop + chartHeight - (t / niceMax) * chartHeight;
                    return (
                        <g key={t}>
                            <line x1={padLeft} y1={y} x2={chartWidth - padRight} y2={y} stroke="#f3f4f6" />
                            <text x={8} y={y + 4} textAnchor="start" fontSize={12} fill="#6b7280">₹{t.toFixed(0)} L</text>
                        </g>
                    );
                })}

                {data.map((d, i) => {
                    const x = padLeft + i * (barWidth + barGap);
                    const h = Math.max(0, (d.value / niceMax) * chartHeight);
                    const y = padTop + chartHeight - h;
                    return (
                        <g key={d.label}>
                            <rect x={x} y={y} width={barWidth} height={h} fill={d.color} rx={6} />
                            {/* Value label above bar */}
                            <text x={x + barWidth / 2} y={Math.max(padTop + 12, y - 8)} textAnchor="middle" fontWeight={600} fill="#111827">
                                ₹{d.value.toFixed(2)} L
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
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Cost Overview for {estimatedDois} DOIs/year</h3>
					<BarChart mVedraAnnual={totals.mVedraAnnual} otherIndianAnnual={totals.otherIndianAnnual} foreignAnnual={totals.foreignAnnual} />
					<p className="text-xs text-gray-500 mt-4">Pricing for foreign agencies is calculated at $1 = ₹88.47. The price also includes costs for setting up a web-infrastructure with similar functionalities to mVedra.</p>
				</div>
			</div>
		</div>
	);
}


