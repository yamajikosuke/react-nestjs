#!/usr/bin/env node
/**
 * TypeScript移行スクリプト
 * 全ての .js ファイルを .ts に リネーム
 */

const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");

function renameJsToTs(dir) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // 再帰的にサブディレクトリを処理
        renameJsToTs(fullPath);
      } else if (file.endsWith(".js") && !file.endsWith(".test.js")) {
        // .js ファイルを .ts にリネーム（テストファイルは別処理）
        const newPath = fullPath.replace(/\.js$/, ".ts");
        try {
          fs.renameSync(fullPath, newPath);
          console.log(`✓ Renamed: ${fullPath} → ${newPath}`);
        } catch (err) {
          console.error(`✗ Failed to rename ${fullPath}: ${err.message}`);
        }
      } else if (file.endsWith(".test.js")) {
        // テストファイルは .test.ts にリネーム
        const newPath = fullPath.replace(/\.test\.js$/, ".test.ts");
        try {
          fs.renameSync(fullPath, newPath);
          console.log(`✓ Renamed: ${fullPath} → ${newPath}`);
        } catch (err) {
          console.error(`✗ Failed to rename ${fullPath}: ${err.message}`);
        }
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${dir}: ${err.message}`);
  }
}

console.log("🔄 Starting TypeScript migration...\n");
renameJsToTs(srcDir);
console.log("\n✅ Migration complete!");
