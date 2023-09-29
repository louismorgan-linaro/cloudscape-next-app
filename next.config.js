/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@cloudscape-design/components",
    "@cloudscape-design/component-toolkit",
  ],
  webpack(config) {
    // TODO: work out how to make next accept component.scoped.css format without bypassing the global styles protection.

    // cloudscape components have scoped css files with the format component.scoped.css. Next.js only allows scoped css in the format component.module.css. This webpack config bypasses this rule.

    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    if (!oneOfRule)
      return console.log("Unable to find css module rule to disabled it");
    oneOfRule.oneOf.forEach((one) => {
      if (
        !(one.issuer && one.issuer.and && `${one.issuer.and}`.includes("_app"))
      )
        return;
      one.issuer.and = [path.resolve(__dirname)];
    });

    // Creates webpack aliases for cloudscape components so that the usual imports can be used but the themed components will be imported
    config.resolve.alias = {
      ...config.resolve.alias,
      "@cloudscape-design/components": path.resolve(
        __dirname,
        "theme/themed/components"
      ),
      "@cloudscape-design/design-tokens": path.resolve(
        __dirname,
        "theme/themed/design-tokens"
      ),
    };

    return config;
  },
};

module.exports = nextConfig;
