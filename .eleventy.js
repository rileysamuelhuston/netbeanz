module.exports = function 
(eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/CSS");
  eleventyConfig.addPassthroughCopy ("./src/font")
  eleventyConfig.addPassthroughCopy ("./src/images")
  eleventyConfig.addPassthroughCopy ("./src/sound")
  eleventyConfig.addPassthroughCopy ("./src/_data")
  eleventyConfig.addPassthroughCopy ("./src/scripts")





    return {
      dir: {
        input: "src",
        output: "docs",
      },
    
    };
  };