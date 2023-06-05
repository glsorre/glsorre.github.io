const fs = require("fs")
const { glob } = require("glob")
const yaml = require("js-yaml")
const { marked } = require("marked")

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  contents.content = await marked.parse(contents.content, { mangle: false, headerIds: false, headerPrefix: false })
  return contents
}

module.exports = async function() {
  const filenames = await glob('./intros/*.yml')
  return (await Promise.all(filenames.map(parseYaml))).sort((a, b) => a.order - b.order)
};