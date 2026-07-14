import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public");

const EXTENSIONS = [".png", ".jpg", ".jpeg"];

let total = 0;
let converted = 0;
let skipped = 0;

async function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // تجاهل الفيديوهات
      if (file === "videos") continue;

      await walk(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!EXTENSIONS.includes(ext)) continue;

    total++;

    const output = fullPath.replace(ext, ".webp");

    if (fs.existsSync(output)) {
      skipped++;
      console.log(`⏭️  Skipped: ${path.basename(output)}`);
      continue;
    }

    try {
      await sharp(fullPath)
        .webp({
          quality: 85,
        })
        .toFile(output);

      converted++;

      console.log(`✅ ${path.basename(file)}`);
    } catch (err) {
      console.error(`❌ ${file}`);
      console.error(err.message);
    }
  }
}

await walk(ROOT);

console.log("");
console.log("======================");
console.log(`Found: ${total}`);
console.log(`Converted: ${converted}`);
console.log(`Skipped: ${skipped}`);
console.log("======================");