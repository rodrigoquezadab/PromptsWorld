/**
 * Script de utilidad para sincronizar data/prompts-database.json con data/prompts-database.js
 * Ejecutar con: node scripts/sync-database.js
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const jsonPath = path.join(rootDir, 'data', 'prompts-database.json');
const jsPath = path.join(rootDir, 'data', 'prompts-database.js');

if (!fs.existsSync(jsonPath)) {
  console.error('Error: no se encontró el archivo ' + jsonPath);
  process.exit(1);
}

try {
  const jsonContent = fs.readFileSync(jsonPath, 'utf8');
  // Validar JSON sintácticamente
  const parsed = JSON.parse(jsonContent);
  
  const jsWrapper = `/**
 * PromptsWorld - Default Database Object
 * Generado automáticamente a partir de data/prompts-database.json
 * Proporciona soporte offline y compatibilidad con el protocolo file://.
 */
window.PROMPTS_WORLD_DEFAULT_DATABASE = ${jsonContent};
`;

  fs.writeFileSync(jsPath, jsWrapper, 'utf8');
  console.log('✅ Sincronización exitosa:');
  console.log(`- Prompts: ${parsed.prompts ? parsed.prompts.length : 0}`);
  console.log(`- Códigos Gemini: ${parsed.geminiCodes ? parsed.geminiCodes.length : 0}`);
  console.log(`- Instrucciones Gemini: ${parsed.instructionsTemplates ? parsed.instructionsTemplates.length : 0}`);
  console.log(`- Archivo JS generado: data/prompts-database.js`);
} catch (err) {
  console.error('Error al sincronizar base de datos:', err);
  process.exit(1);
}
