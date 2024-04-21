import { readFileSync } from 'fs';
import { join } from 'path';

export function loadHtml() {
  const htmlPath = join(__dirname, '../index.html');
  const htmlContent = readFileSync(htmlPath, 'utf8');
  document.body.innerHTML = htmlContent;
}
