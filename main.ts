import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One complete story in exactly six words.
// A grandmother's unwritten recipe, lost because she never spoke it:
// the turn is in "silence" — the recipe did not die with her,
// it died with the words she never said.
const STORY = "Grandmother's recipe died with her silence.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`story must be 1-60 characters, got ${STORY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
