module.exports = function 
(eleventyConfig) {
  eleventyConfig.addPassthroughCopy ("./src/style.css");
  eleventyConfig.addPassthroughCopy ("./src/font")
  eleventyConfig.addPassthroughCopy ("./src/poststyle.css")


    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };