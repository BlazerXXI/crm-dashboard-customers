/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  basePath: "/crm-dashboard-customers",
  assetPrefix: "/crm-dashboard-customers",
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
