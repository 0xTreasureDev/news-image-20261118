// Entry program for the make.fun news image bounty (18 November 2026).
// The harness runs this file once; its only job is to place the finished
// front-page image where the grader expects it: /output/entry.png.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

if (!existsSync(source)) {
  console.error(`entry image missing beside main.ts: ${source}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log(`wrote ${target}`);
