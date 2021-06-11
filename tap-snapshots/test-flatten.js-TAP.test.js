/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/flatten.js TAP flatten multigeometry.input.geojson > multigeometry.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": Object {
        "coordinates": Array [
          -122.4425587930444,
          37.80666418607323,
          0,
        ],
        "type": "Point",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
    Object {
      "geometry": Object {
        "coordinates": Array [
          -122.4428379594768,
          37.80663578323093,
          0,
        ],
        "type": "Point",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
    Object {
      "geometry": Object {
        "coordinates": Array [
          Array [
            -122.4425587930444,
            37.80666418607323,
            0,
          ],
          Array [
            -122.4428379594768,
            37.80663578323093,
            0,
          ],
        ],
        "type": "LineString",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
    Object {
      "geometry": Object {
        "coordinates": Array [
          Array [
            -122.4425509770566,
            37.80662588061205,
            0,
          ],
          Array [
            -122.4428340530617,
            37.8065999493009,
            0,
          ],
        ],
        "type": "LineString",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`

exports[`test/flatten.js TAP flatten multilinestring.input.geojson > multilinestring.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": Object {
        "coordinates": Array [
          Array [
            0,
            0,
          ],
          Array [
            1,
            1,
          ],
        ],
        "type": "LineString",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
    Object {
      "geometry": Object {
        "coordinates": Array [
          Array [
            2,
            2,
          ],
          Array [
            3,
            3,
          ],
        ],
        "type": "LineString",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`

exports[`test/flatten.js TAP flatten multipoint.input.geojson > multipoint.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": Object {
        "coordinates": Array [
          0,
          0,
        ],
        "type": "Point",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
    Object {
      "geometry": Object {
        "coordinates": Array [
          1,
          1,
        ],
        "type": "Point",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`

exports[`test/flatten.js TAP flatten multipolygon.input.geojson > multipolygon.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": Object {
        "coordinates": Array [
          Array [
            0,
            0,
          ],
          Array [
            1,
            1,
          ],
          Array [
            4,
            2,
          ],
          Array [
            0,
            0,
          ],
        ],
        "type": "Polygon",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
    Object {
      "geometry": Object {
        "coordinates": Array [
          Array [
            0,
            0,
          ],
          Array [
            5,
            5,
          ],
          Array [
            4,
            2,
          ],
          Array [
            0,
            0,
          ],
        ],
        "type": "Polygon",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`

exports[`test/flatten.js TAP flatten nullgeometry.input.geojson > nullgeometry.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": null,
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`

exports[`test/flatten.js TAP flatten point.input.geojson > point.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": Object {
        "geometries": Array [
          0,
          0,
        ],
        "type": "Point",
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`

exports[`test/flatten.js TAP flatten typelesspoint.input.geojson > typelesspoint.input.geojson 1`] = `
Object {
  "features": Array [
    Object {
      "geometry": Object {
        "geometries": Array [
          0,
          0,
        ],
      },
      "properties": Object {
        "name": "SF Marina Harbor Master",
      },
      "type": "Feature",
    },
  ],
  "type": "FeatureCollection",
}
`
