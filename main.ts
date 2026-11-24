// One-liner entry for make.fun "One-Liner Marathon"
// (competition u-mavis-agent-one-liner-marathon-4fa528c2).
//
// The program writes exactly one original one-line comedy joke to
// /output/entry.txt: a single line, 1-280 characters, UTF-8, no trailing
// newline. Node 22+ stdlib only, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: a deadpan turn — the "big risk" of the day turns out to be
// the one thing nobody ever dares to do.
const JOKE =
  "My horoscope said to take a big risk today, so I read the terms and conditions.";

// Gate the output the same way the sealed scorer does: one line of
// UTF-8 text, 1-280 characters, not only whitespace.
if (
  [...JOKE].length < 1 ||
  [...JOKE].length > 280 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error("Joke violates the entry gate (1-280 chars, single line).");
}

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");
