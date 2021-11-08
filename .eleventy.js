module.exports = (config) => {
    // Returns a collection of all updates
    config.addCollection("updates", (collection) => {
        return [
            ...collection.getFilteredByGlob("./src/updates/*.md").reverse(),
        ];
    });

    // Returns a collection of the 3 latest updates sorted from newest to oldest
    config.addCollection("latestUpdates", (collection) => {
        return [
            ...collection
                .getFilteredByGlob("./src/updates/*.md")
                .reverse()
                .slice(0, 3),
        ];
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
