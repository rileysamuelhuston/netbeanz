module.exports = function 
(eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/style.css");
  eleventyConfig.addPassthroughCopy ("./src/font")

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };