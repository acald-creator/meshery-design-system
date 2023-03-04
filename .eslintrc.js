module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-meshery`
  extends: ["meshery"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
