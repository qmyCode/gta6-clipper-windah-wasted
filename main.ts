// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video named in VIDEO.json — the house reads
// the video's views through the YouTube Data API and ranks by them. This
// program's only job is to hand VIDEO.json to the grader: it copies the file
// from the repository into the output directory, and that is all it does.
//
// Where things live:
//   - source: MAKEFUN_BOT_DIR when set; otherwise the folder this file sits
//     in; otherwise the current working directory.
//   - destination: MAKEFUN_OUTPUT_DIR when set, otherwise /output.
//
// Outside the grader's container those two variables stand in for the
// repository and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function sourceDir(): string {
  const fromEnv = process.env.MAKEFUN_BOT_DIR;
  if (fromEnv) return fromEnv;
  const besideThisFile = dirname(fileURLToPath(import.meta.url));
  if (existsSync(join(besideThisFile, 'VIDEO.json'))) return besideThisFile;
  return process.cwd();
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(sourceDir(), 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  // Fail loudly with the paths involved: a silent miss here would hand the
  // grader an empty output directory and score the entry 0.
  console.error(`could not copy VIDEO.json from ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${target}`);
