/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	basePath: '/crm-dashboard-customers',
	assetPrefix: '/crm-dashboard-customers',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
