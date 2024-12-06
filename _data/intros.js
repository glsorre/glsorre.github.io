import fs from "fs"
import glob from "fast-glob"
import yaml from "js-yaml"
import { marked } from "marked"

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  contents.content = await marked.parse(contents.content, { mangle: false, headerIds: false, headerPrefix: false })
  return contents
}

export default async function() {
  const filenames = await glob('./intros/*.yml')
  return (await Promise.all(filenames.map(parseYaml))).sort((a, b) => a.order - b.order)
};