import fs from "node:fs";
import bounds from "svg-path-bounds";

const file = process.argv[2];
if (!file)
  throw new Error("Usage: node scripts/crop-viewbox.mjs path/to/logo.svg");

const svg = fs.readFileSync(file, "utf8");

// Grab ALL path d="..."
const ds = [...svg.matchAll(/<path[^>]*\sd="([^"]+)"[^>]*>/g)].map((m) => m[1]);
if (ds.length === 0) throw new Error("No <path d='...'> found");

// Union bounds across all paths
let minX = Infinity,
  minY = Infinity,
  maxX = -Infinity,
  maxY = -Infinity;

for (const d of ds) {
  const [x1, y1, x2, y2] = bounds(d);
  if (x1 < minX) minX = x1;
  if (y1 < minY) minY = y1;
  if (x2 > maxX) maxX = x2;
  if (y2 > maxY) maxY = y2;
}

// Optional padding so letters don’t touch edges
const pad = 1.5;
const x = minX - pad;
const y = minY - pad;
const w = maxX - minX + pad * 2;
const h = maxY - minY + pad * 2;

// Remove fixed width/height so it scales better
let next = svg.replace(/\swidth="[^"]*"/, "").replace(/\sheight="[^"]*"/, "");

// Replace viewBox
if (next.includes("viewBox=")) {
  next = next.replace(/viewBox="[^"]*"/, `viewBox="${x} ${y} ${w} ${h}"`);
} else {
  next = next.replace("<svg", `<svg viewBox="${x} ${y} ${w} ${h}"`);
}

fs.writeFileSync(file, next, "utf8");
console.log(`Cropped viewBox -> ${x} ${y} ${w} ${h} (paths: ${ds.length})`);
