const fs = require("fs")
const { glob } = require("glob")
const yaml = require("js-yaml")

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  return contents
}

module.exports = async function() {
  const filenames = await glob('./navigations/*.yml')
  return (await Promise.all(filenames.map(parseYaml))).sort((a, b) => a.order - b.order)
};