import chokidar from 'chokidar';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'assets-raw';
const DEST_DIR = 'assets';
const MAX_WIDTH = 1920;
const isWatch = process.argv.includes('--watch');

async function processFile(filePath) {
  try {
    const relPath = path.relative(SRC_DIR, filePath);
    const destPath = path.join(DEST_DIR, relPath);
    await fs.mkdir(path.dirname(destPath), { recursive: true });

    const ext = path.extname(filePath).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const image = sharp(filePath);
      const metadata = await image.metadata();
      
      if (metadata.width > MAX_WIDTH) {
        image.resize(MAX_WIDTH);
      }
      
      if (ext === '.jpg' || ext === '.jpeg') {
        image.jpeg({ quality: 80, progressive: true });
      } else if (ext === '.png') {
        image.png({ quality: 80 });
      }
      
      await image.toFile(destPath);
      console.log(`Optimized: ${relPath}`);
    } else {
      await fs.copyFile(filePath, destPath);
      console.log(`Copied: ${relPath}`);
    }
  } catch (err) {
    // Suppress error if the file is a directory which chokidar might encounter
    if (err.code !== 'EISDIR') {
        console.error(`Error processing ${filePath}:`, err);
    }
  }
}

console.log(`Starting image optimization. Watch mode: ${isWatch}`);

const watcher = chokidar.watch(SRC_DIR, {
  persistent: isWatch,
  ignored: /(^|[\/\\])\../, // ignore dotfiles
});

watcher
  .on('add', processFile)
  .on('change', processFile)
  .on('error', error => console.error(`Watcher error: ${error}`))
  .on('ready', () => {
    console.log('Initial scan complete.');
    if (!isWatch) {
      watcher.close();
    } else {
      console.log('Watching for changes in assets-raw...');
    }
  });
