import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const srcDir = join(process.cwd(), 'src');

if (existsSync(srcDir)) {
  console.log('Found src/ directory, removing it...');
  rmSync(srcDir, { recursive: true, force: true });
  console.log('Successfully removed src/ directory');
} else {
  console.log('No src/ directory found');
}

// Also check for any .next cache
const nextDir = join(process.cwd(), '.next');
if (existsSync(nextDir)) {
  console.log('Found .next/ directory, removing it...');
  rmSync(nextDir, { recursive: true, force: true });
  console.log('Successfully removed .next/ directory');
} else {
  console.log('No .next/ directory found');
}
