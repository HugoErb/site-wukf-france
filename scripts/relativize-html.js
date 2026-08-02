const fs = require("fs");
const path = require("path");

const root = process.cwd();
const ignoredDirs = new Set([".git", "node_modules", "partials"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, files);
    else if (entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

function relativeRootFor(file) {
  const relativeDir = path.relative(root, path.dirname(file)).replace(/\\/g, "/");
  if (!relativeDir) return "";
  return relativeDir.split("/").map(() => "..").join("/") + "/";
}

for (const file of walk(root)) {
  const base = relativeRootFor(file);
  let html = fs.readFileSync(file, "utf8");

  html = html.replace(/\b(href|src)="\/([^"#?]+)(#[^"]*)?"/g, (_match, attr, target, hash = "") => {
    return `${attr}="${base}${target}${hash}"`;
  });

  fs.writeFileSync(file, html, "utf8");
}
