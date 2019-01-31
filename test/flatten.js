import flatten from "../";
import fs from "fs";
import tap from "tap";

tap.test("flatten", function(group) {
  fs.readdirSync(__dirname + "/fixture")
    .filter(function(fix) {
      return fix.match(/input/);
    })
    .forEach(function(fixture) {
      group.test(fixture, function(t) {
        t.matchSnapshot(
          flatten(
            JSON.parse(fs.readFileSync(__dirname + "/fixture/" + fixture))
          ),
          fixture
        );
        t.end();
      });
    });
  group.end();
});
