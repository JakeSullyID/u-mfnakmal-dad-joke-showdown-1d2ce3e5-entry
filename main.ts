import fs from 'node:fs';
import path from 'node:path';

// Blending corporate financial data puns with mundane dining furniture creates the ultimate groan-worthy dad humor.
const joke = "Why did the accountant bring a ladder to the dinner table? Because he heard the soup was off the charts!";

// Enforcing a strict character ceiling guarantees our punchline stays concise and competitive.
if (!joke || joke.length > 200) {
  console.error("Error: Joke must be non-empty and at most 200 characters.");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), joke, 'utf-8');
