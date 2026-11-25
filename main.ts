// Famous Last Words: The Funniest Epitaph
// Entry program for make.fun bounty
// u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406
//
// Writes one line of famous last words — a single tombstone epitaph of at
// most 150 characters — to /output/entry.txt.
//
// Fully deterministic: no randomness, no network, no clock, no environment
// input. The same text is written on every run.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text. One line, no trailing newline, well inside the 150
// character gate.
const ENTRY_TEXT = "I left my body to science. Science left it on read.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 150 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
const charCount = [...ENTRY_TEXT].length;
if (charCount < 1 || charCount > 150) {
  throw new Error(`entry is ${charCount} characters, gate requires 1-150`);
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY_TEXT.includes("\n") || ENTRY_TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Write atomically through a temporary file in the same directory, then
// rename into place, so a crashed or interrupted run never leaves a
// half-written entry.txt behind.
const tmpPath = join(outDir, ".entry.txt.tmp");
writeFileSync(tmpPath, ENTRY_TEXT, "utf8");
renameSync(tmpPath, outPath);

// Read back and verify: the file on disk must be byte-identical to the
// intended text — one line, no trailing newline, inside the gate.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error("verification failed: entry.txt does not match ENTRY_TEXT");
}
if (written.endsWith("\n")) {
  throw new Error("verification failed: entry.txt has a trailing newline");
}

console.log(`wrote ${charCount} characters to ${outPath}`);
