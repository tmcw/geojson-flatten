import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import flatten from "../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixtureDir = path.join(__dirname, "fixture");

test("flatten", async (t) => {
  const fixtures = fs
    .readdirSync(fixtureDir)
    .filter((fixture) => fixture.includes("input"));

  for (const fixture of fixtures) {
    await t.test(fixture, (t) => {
      const input = JSON.parse(
        fs.readFileSync(path.join(fixtureDir, fixture), "utf8"),
      );
      t.assert.snapshot(flatten(input));
    });
  }
});
