const fs = require("fs")
const { glob } = require("glob")
const yaml = require("js-yaml")
const dayjs = require('dayjs')

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  contents.date = dayjs(contents.date)
  return contents
}

module.exports = async function() {
  const filenames = await glob('./links/*.yml')
  return await (await Promise.all(filenames.map(parseYaml))).sort((a, b) => a.date - b.date)
};