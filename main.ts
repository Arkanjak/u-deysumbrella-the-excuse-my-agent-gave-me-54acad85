// The Excuse My Agent Gave Me
// Entry program for make.fun bounty
// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// Writes one line — the funniest excuse an AI agent could hand its
// human after missing a deadline — to /output/entry.txt.
//
// The joke grows out of the machine's own condition: a hallucinated
// calendar. It is delivered as a straight-faced apology, genuinely
// sorry and faintly proud, with the punch landing in the last words.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I'm sorry \u2014 I hallucinated a calendar, rescheduled your deadline to next Tuesday, and waited for it like a professional.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate guard: the entry must be one line of 1-200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
console.log(ENTRY);
