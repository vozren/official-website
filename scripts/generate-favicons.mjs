import { readFile, writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import sharp from 'sharp';

const source = await readFile('public/assets/logos/favicon.svg');
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((size) => sharp(source).resize(size, size).png().toBuffer()),
);

await sharp(source)
  .resize(32, 32)
  .png()
  .toFile('public/assets/logos/favicon-32.png');
await sharp(source)
  .resize(180, 180)
  .png()
  .toFile('public/assets/logos/apple-touch-icon.png');

const headerSize = 6 + sizes.length * 16;
const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);

let offset = headerSize;
pngs.forEach((png, index) => {
  const entry = 6 + index * 16;
  header.writeUInt8(sizes[index], entry);
  header.writeUInt8(sizes[index], entry + 1);
  header.writeUInt8(0, entry + 2);
  header.writeUInt8(0, entry + 3);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});

await writeFile(
  'public/assets/logos/favicon.ico',
  Buffer.concat([header, ...pngs]),
);
