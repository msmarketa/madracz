module.exports = (config) => {
  // WATCH TARGETS
  config.addWatchTarget("./src/scss/**/*.scss");
  config.addWatchTarget("./src/js/**/*.js");

  // PLUGINS
  const markdownIt = require("markdown-it");

  // create a new markdown-it instance with the plugin
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);

  config.setLibrary("md", markdownLib);

  // PASSTHROUGH
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/js/");

  // COLLECTIONS
  config.addCollection("updates", (collection) => {
    return [...collection.getFilteredByGlob("./src/updates/*.md").reverse()];
  });

  // Returns a collection of the 3 latest updates sorted from newest to oldest
  config.addCollection("latestUpdates", (collection) => {
    return [...collection.getFilteredByGlob("./src/updates/*.md").reverse().slice(0, 3)];
  });

  config.addCollection("sortiment", (collection) => {
    return [...collection.getFilteredByGlob("./src/sortiment/*.md")];
  });

  config.addFilter("sortByOrder", (values) => {
    return values.sort((a, b) => b.data.order - a.data.order).reverse();
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
