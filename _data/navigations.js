import fs from "fs"
import glob from "fast-glob"
import yaml from "js-yaml"

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  return contents
}

export default async function() {
  const filenames = await glob('./navigations/*.yml')
  return (await Promise.all(filenames.map(parseYaml))).sort((a, b) => a.order - b.order)
};