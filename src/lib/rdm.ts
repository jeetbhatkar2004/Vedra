export const rdmBase = (import.meta as any).env?.VITE_RDM_API_BASE || 'http://localhost:8080';

export async function searchRecords(q: string, size = 10, page = 1) {
  const url = new URL(`${rdmBase}/api/records`);
  if (q) url.searchParams.set("q", q);
  url.searchParams.set("size", String(size));
  url.searchParams.set("page", String(page));
  const res = await fetch(url);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

export async function getRecord(idOrPid: string) {
  const res = await fetch(`${rdmBase}/api/records/${idOrPid}`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
}

export async function getRecordFiles(idOrPid: string) {
  const res = await fetch(`${rdmBase}/api/records/${idOrPid}/files`);
  if (!res.ok) throw new Error("Files not found");
  return res.json();
}

export async function downloadFile(idOrPid: string, filename: string) {
  const res = await fetch(`${rdmBase}/api/records/${idOrPid}/files/${filename}/content`);
  if (!res.ok) throw new Error("Download failed");
  return res.blob();
}

export async function searchFacets() {
  const res = await fetch(`${rdmBase}/api/records/facets`);
  if (!res.ok) throw new Error("Facets not available");
  return res.json();
}
