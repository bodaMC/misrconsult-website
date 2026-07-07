import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "lib", "projects");

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
      continue;
    }

    if (!file.endsWith(".ts")) continue;

    let content = fs.readFileSync(full, "utf8");

    content = content.replace(
      /"(\/projects\/[^"]+)\.(png|jpg|jpeg)"/g,
      '"$1.webp"'
    );

    fs.writeFileSync(full, content, "utf8");

    console.log(`✅ ${file}`);
  }
}

walk(ROOT);

console.log("\nDone.");