import { copyFile, cp, mkdir, rm } from 'node:fs/promises';

const projectRoot = new URL('../', import.meta.url);
const outputDirectory = new URL('dist/', projectRoot);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await copyFile(
  new URL('index.html/toasted-store(3).html', projectRoot),
  new URL('index.html', outputDirectory),
);
await cp(
  new URL('images/', projectRoot),
  new URL('images/', outputDirectory),
  { recursive: true },
);
