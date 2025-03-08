module.exports = function 
(eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/CSS");
  eleventyConfig.addPassthroughCopy ("./src/font")
  eleventyConfig.addPassthroughCopy ("./src/images")




    return {
      dir: {
        input: "src",
        output: "docs",
      },
    };
  };