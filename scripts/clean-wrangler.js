import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'dist/server/wrangler.json');

if (fs.existsSync(filePath)) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Eliminar el binding reservado 'ASSETS' que rompe Pages
  if (data.assets) {
    delete data.assets;
  }
  // Asegurar que el punto de entrada sea relativo a la raíz
  data.main = 'dist/server/entry.mjs';
  
  // Asegurar que Pages sepa dónde está el output
  data.pages_build_output_dir = 'dist';
  
  // Guardar de nuevo en dist/server
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
  // También guardarlo en la raíz como wrangler.json para que Cloudflare lo vea
  fs.writeFileSync(path.join(process.cwd(), 'wrangler.json'), JSON.stringify(data, null, 2));
  
  console.log('✅ wrangler.json cleaned and moved to root');
} else {
  console.error('❌ dist/server/wrangler.json not found');
}
