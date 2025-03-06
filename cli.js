#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const projectName = args[1] || "my-app";
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, "template");

async function createProject() {
  try {
    console.log(`🚀 Creating project: ${projectName}...`);

    if (fs.existsSync(targetDir)) {
      console.error("❌ Error: Directory already exists!");
      process.exit(1);
    }

    fs.copySync(templateDir, targetDir);
    console.log("✅ Project files copied!");

    const packageJsonPath = path.join(targetDir, "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.name = projectName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log("📦 Installing dependencies...");
    execSync("npm install", { stdio: "inherit", cwd: targetDir });

    console.log("🎉 Done! Your project is ready.");
    console.log(`👉 cd ${projectName} && npm run dev`);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

createProject();
