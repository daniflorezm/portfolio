import { rmSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const cwd = process.cwd();
console.log('CWD:', cwd);
console.log('Directory contents:', readdirSync(cwd));

// Check for any pages directory anywhere
const pagesDir = join(cwd, 'pages');
const srcPagesDir = join(cwd, 'src', 'pages');
const srcDir = join(cwd, 'src');
const nextDir = join(cwd, '.next');
const cacheDir = join(cwd, 'node_modules', '.cache');

const dirs = [
  { path: pagesDir, name: 'pages/' },
  { path: srcPagesDir, name: 'src/pages/' },
  { path: srcDir, name: 'src/' },
  { path: nextDir, name: '.next/' },
  { path: cacheDir, name: 'node_modules/.cache/' },
];

for (const dir of dirs) {
  if (existsSync(dir.path)) {
    console.log(`Found ${dir.name} - removing...`);
    rmSync(dir.path, { recursive: true, force: true });
    console.log(`Removed ${dir.name}`);
  } else {
    console.log(`No ${dir.name} found`);
  }
}

// Also check if app/ exists
const appDir = join(cwd, 'app');
if (existsSync(appDir)) {
  console.log('app/ directory exists:', readdirSync(appDir));
} else {
  console.log('WARNING: app/ directory does NOT exist!');
}
