import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for ship-it-friday.
// The grader's sandbox is read-only outside /output, so the only write
// target is the absolute /output/entry.txt path — never a relative path.
// The entry is written byte-for-byte with no trailing newline.
const line =
  "feat: rewrote auth from memory, docs were 18,000 tokens " +
  "— ship it, it's Friday";

const outDir = "/output";
const outPath = outDir + "/entry.txt";

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line);
