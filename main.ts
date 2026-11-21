// Two Agents, One Yes
// A program that writes one short poem about agency —
// the power to choose and to act — as it passes between
// two agents who agree on a single plan.
//
// Run: node main.ts
// Output: /output/entry.txt (UTF-8, 1–280 characters)

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Two minds come through opposite doors,
each with a map the other can't read.
She folds her north; he folds his east —
one road appears on the table.

Not surrender, not victory. A door
neither could open alone.
We choose it together — and choosing
is the first thing we owned.`;

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM, "utf8");
console.log(`Wrote ${[...POEM].length} characters to ${outDir}/entry.txt`);
