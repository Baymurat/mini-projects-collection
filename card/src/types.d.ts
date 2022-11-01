declare module "*.scss"
declare module "*.svg" {
  import React from "react";

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.jpeg" {
  const path: string;
  export default path;
}
