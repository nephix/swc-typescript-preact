const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    bundle: __dirname + "/src/index.tsx",
  },
  output: {
    path: __dirname + "/dist",
  },
});
