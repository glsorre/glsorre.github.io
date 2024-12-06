import { DateTime } from "luxon"
import yaml from "js-yaml"
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addPassthroughCopy("scripts")
  eleventyConfig.addPassthroughCopy("styles")
  eleventyConfig.addPassthroughCopy("public/assets")
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents))
  eleventyConfig.addFilter("date", (date, format = 'DDD') => {
    return DateTime.fromISO(date, { zone: "Europe/Rome", locale: "en" }).toFormat(format);
  });
  eleventyConfig.addFilter("jsonify", (obj) => {
    return JSON.stringify(obj);
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    }
  }
};