import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR 04: Bread inserted upside down. I toasted the void. Please remove the void and try again.";

// Fail loud if the entry ever breaks the competition gate: 1-120 chars, one line.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-120`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
