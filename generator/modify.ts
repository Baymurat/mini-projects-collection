import fs from "fs";

const projectName = process.argv[2];
const isReactTemplate = process.argv[3] === "true";

if (fs.existsSync(`${projectName}/package.json`)) {
  const file = fs.readFileSync(`${projectName}/package.json`, "utf-8");
  const testScript = "\"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"";
  const react = isReactTemplate ? "--env index='./src/index.tsx'" : "";
  // eslint-disable-next-line
  const startScript = `"start": "webpack-dev-server --config ../webpack.config.js ${react} --env base=${projectName} --env title=\'${projectName.toUpperCase()}\'"`;
  const writeFile = file.replace(testScript, startScript);
  fs.writeFileSync(`${projectName}/package.json`, writeFile);
}
