import fs from 'fs';

const projectName = process.argv[2]

if(fs.existsSync(`${projectName}/package.json`)) {
  const file = fs.readFileSync(`${projectName}/package.json`, 'utf-8');
  const testScript = '"test": "echo \\"Error: no test specified\\" && exit 1"';
  const startScript = `"start": "webpack-dev-server --config ../webpack.config.js --env base=${projectName} --env title=\'${projectName.toUpperCase()}\'"`;
  const writeFile = file.replace(testScript, startScript)
  fs.writeFileSync(`${projectName}/package.json`, writeFile);
}
