const fs = require("fs");
const path = require("path");

const root = process.cwd();
const header = fs.readFileSync(path.join(root, "partials", "header.html"), "utf8").trim();
const footer = fs.readFileSync(path.join(root, "partials", "footer.html"), "utf8").trim();
const headerBlock = `<!-- shared:header:start -->${header}<!-- shared:header:end -->`;
const footerBlock = `<!-- shared:footer:start -->${footer}<!-- shared:footer:end -->`;

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

for (const file of walk(root)) {
  let html = fs.readFileSync(file, "utf8");
  const markedHeader = /<!-- shared:header:start -->[\s\S]*?<!-- shared:header:end -->/;
  const markedFooter = /<!-- shared:footer:start -->[\s\S]*?<!-- shared:footer:end -->/;
  const plainHeader = /<header\b[\s\S]*?<\/header>/;
  const plainFooter = /<footer\b[\s\S]*?<\/footer>/;

  if (markedHeader.test(html)) {
    html = html.replace(markedHeader, headerBlock);
  } else if (plainHeader.test(html)) {
    html = html.replace(plainHeader, headerBlock);
  } else {
    throw new Error(`No header found in ${path.relative(root, file)}`);
  }

  if (markedFooter.test(html)) {
    html = html.replace(markedFooter, footerBlock);
  } else if (plainFooter.test(html)) {
    html = html.replace(plainFooter, footerBlock);
  } else {
    throw new Error(`No footer found in ${path.relative(root, file)}`);
  }

  fs.writeFileSync(file, html, "utf8");
}
