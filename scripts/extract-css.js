import { readFileSync } from 'fs';

const css = readFileSync('/vercel/share/v0-project/src/assets/style/app.css', 'utf-8');

// Find van-cell and van-field related rules
const rules = css.split('}').filter(rule => 
  rule.includes('van-cell') || rule.includes('van-field') || rule.includes('van-panel')
).map(rule => rule + '}');

rules.forEach(rule => {
  console.log(rule.trim());
  console.log('---');
});
