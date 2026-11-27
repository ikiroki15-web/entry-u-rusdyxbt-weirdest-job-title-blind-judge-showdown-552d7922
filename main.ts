// makefun anchor 89bc0a4a191d933223247d6b11176ae1d3e06b80 round 34234355
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT = "Senior Apologizer for Self-Driving Cars";
const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 60;

function validateLength(text: string): void {
  const length = [...text].length;
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
}

function resolveOutputTarget(path: string): { dir: string; file: string } {
  if (!path.startsWith("/")) {
    throw new Error(`Output path must be absolute, got ${path}.`);
  }
  if (!path.endsWith("/entry.txt")) {
    throw new Error(`Output path must end with /entry.txt, got ${path}.`);
  }
  return { dir: dirname(path), file: path };
}

function writeEntry(text: string): void {
  validateLength(text);
  const target = resolveOutputTarget(OUTPUT_PATH);
  mkdirSync(target.dir, { recursive: true });
  writeFileSync(target.file, text, "utf8");
}

writeEntry(ENTRY_TEXT);
