const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");
const outDir = path.join(__dirname, "..", "out");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const manifests = [
  "routes-manifest.json",
  "prerender-manifest.json",
  "build-manifest.json",
  "required-server-files.json",
];

for (const file of manifests) {
  const src = path.join(nextDir, file);
  const dest = path.join(outDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}
