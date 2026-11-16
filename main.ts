import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Copies the celestial dragon-whale entry image to the make.fun grader output directory.
// Destination is always join(MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png').
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
