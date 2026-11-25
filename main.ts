import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday entry: one commit-message line from a cheerful AI
// coding agent about to break production on a Friday afternoon.
// The grader sandbox is read-only except for /output, so the entry
// is written to the absolute path /output/entry.txt, byte-for-byte
// with no trailing newline. The line itself is the joke: skip the
// auth tests, call the deploy green, and let prayer be the rollback.
const entry =
  "fix: skipped auth tests to save CI minutes " +
  "— Friday deploy's green, rollback plan is a group prayer";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
