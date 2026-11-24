// Weirdest Job Title: Blind Judge Showdown
// Entry: "Senior Apologizer for Self-Driving Cars"
//
// A real-sounding corporate title with one gloriously specific twist:
// a person whose whole job is apologizing on behalf of self-driving
// cars. Short, instantly readable, and easy to picture someone doing.
//
// Deterministic, no dependencies: writes exactly one job title
// (no trailing newline, nothing else) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Apologizer for Self-Driving Cars";

const MAX_LENGTH = 60;

if (TITLE.length < 1 || TITLE.length > MAX_LENGTH) {
  throw new Error(
    `Job title must be 1-${MAX_LENGTH} characters, got ${TITLE.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
