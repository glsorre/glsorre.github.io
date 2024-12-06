import fs from "fs"
import glob from "fast-glob"
import yaml from "js-yaml"
import { DateTime } from "luxon"

async function parseYaml(filename) {
  let contents = fs.readFileSync(filename)
  contents = yaml.load(contents)
  contents.date = DateTime.fromISO(contents.date)
  return contents
}

export default async function() {
  const filenames = await glob('./links/*.yml')
  return await (await Promise.all(filenames.map(parseYaml))).sort((a, b) => a.date - b.date)
};