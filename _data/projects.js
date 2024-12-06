import fs from "fs"
import glob from "fast-glob"
import yaml from "js-yaml"
import { marked } from "marked"

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  contents.desc = await marked.parse(contents.desc, { mangle: false, headerIds: false, headerPrefix: false })
  return contents
}

export default async function() {
  const filenames = await glob('./projects/*.yml')
  return (await Promise.all(filenames.map(parseYaml)))
};