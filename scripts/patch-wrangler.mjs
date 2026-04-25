import fs from 'fs';
import path from 'path';

const wranglerPath = path.join(process.cwd(), 'dist', 'server', 'wrangler.json');

if (fs.existsSync(wranglerPath)) {
  console.log('Patching wrangler.json for Cloudflare Pages Compatibility...');
  const config = JSON.parse(fs.readFileSync(wranglerPath, 'utf8'));
  
  // 1. Remove ASSETS binding which is reserved in Pages
  if (config.assets) {
    delete config.assets;
    console.log('- Removed reserved ASSETS binding.');
  }
  
  // 2. Fix triggers schema
  if (config.triggers && Object.keys(config.triggers).length === 0) {
    config.triggers = { crons: [] };
    console.log('- Fixed triggers schema.');
  }

  // 3. Remove other conflicting fields if necessary
  // (Optional: you can clean up more fields here)

  fs.writeFileSync(wranglerPath, JSON.stringify(config, null, 2));
  console.log('Successfully patched wrangler.json');
} else {
  console.log('wrangler.json not found, skipping patch.');
}
