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
