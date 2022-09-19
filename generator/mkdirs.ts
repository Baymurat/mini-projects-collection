import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectName = process.argv[2];
const isReactTemplate = process.argv[3];


if (!fs.existsSync(projectName)) {
  fs.mkdirSync(`${projectName}/src`, { recursive: true });
  fs.mkdirSync(`${projectName}/style`, { recursive: true });
  fs.mkdirSync(`${projectName}/template`, { recursive: true });

  if (isReactTemplate === "true") {
    fs.copyFileSync(`${__dirname}/template/react/index.tsx`, `${projectName}/src/index.tsx`);
    fs.copyFileSync(`${__dirname}/template/react/index.html`, `${projectName}/template/index.html`);
    fs.copyFileSync(`${__dirname}/template/react/App.tsx`, `${projectName}/src/App.tsx`);
    fs.copyFileSync(`${__dirname}/template/react/tsconfig.json`, `${projectName}/tsconfig.json`);
  } else {
    fs.writeFileSync(`${projectName}/src/index.ts`, "");
    fs.writeFileSync(`${projectName}/tsconfig.json`, "{\n  \"include\": [\"src/**/*\"]\n  }");
    fs.writeFileSync(`${projectName}/template/index.html`, "");
  }
  fs.writeFileSync(`${projectName}/style/style.scss`, "");
}
