import { join } from "path";
import { buildThemedComponents } from "@cloudscape-design/components-themeable/theming";
import path from "path";
import { fileURLToPath } from "url";

const theme = {
  tokens: {
    // specify cloudscape design tokens here e.g.
    // borderRadiusButton: "4px",
  },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

buildThemedComponents({
  theme,
  outputDir: join(__dirname, "./themed"),
});
