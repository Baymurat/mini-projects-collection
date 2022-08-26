import fs from 'fs';

const projectName = process.argv[2]

if(!fs.existsSync(projectName)) {
  fs.mkdirSync(`${projectName}/src`, { recursive: true });
  fs.mkdirSync(`${projectName}/style`, { recursive: true });
  fs.mkdirSync(`${projectName}/template`, { recursive: true });
  fs.writeFileSync(`${projectName}/src/index.ts`, '');
  fs.writeFileSync(`${projectName}/style/style.scss`, '');
  fs.writeFileSync(`${projectName}/template/index.html`, '');
  fs.writeFileSync(`${projectName}/tsconfig.json`, '{\n  "include": ["src/**/*"]\n  }');
}