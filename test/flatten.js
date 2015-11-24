var flatten = require('../'),
    fs = require('fs'),
    test = require('tap').test;

test('flatten', function(group) {
    fs.readdirSync(__dirname + '/fixture')
      .filter(function(fix) { return fix.match(/input/); })
      .forEach(function(fixture) {
        group.test(fixture, function(t) {
          var result = flatten(
            JSON.parse(
              fs.readFileSync(__dirname + '/fixture/' + fixture)));
          if (process.env.UPDATE) {
            fs.writeFileSync(__dirname + '/fixture/' + fixture.replace('input', 'output'),
              JSON.stringify(result, null, 2));
          }
          t.deepEqual(result,
            JSON.parse(
              fs.readFileSync(
                __dirname + '/fixture/' + fixture.replace('input', 'output'))));
           t.end();
        });
    });
    group.end();
});
