/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/flatten.js TAP flatten multigeometry.input.geojson > multigeometry.input.geojson 1`] = `
{ type: 'FeatureCollection',
  features:
   [ { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry:
        { type: 'Point',
          coordinates: [ -122.4425587930444, 37.80666418607323, 0 ] } },
     { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry:
        { type: 'Point',
          coordinates: [ -122.4428379594768, 37.80663578323093, 0 ] } },
     { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry:
        { type: 'LineString',
          coordinates:
           [ [ -122.4425587930444, 37.80666418607323, 0 ],
             [ -122.4428379594768, 37.80663578323093, 0 ] ] } },
     { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry:
        { type: 'LineString',
          coordinates:
           [ [ -122.4425509770566, 37.80662588061205, 0 ],
             [ -122.4428340530617, 37.8065999493009, 0 ] ] } } ] }
`

exports[`test/flatten.js TAP flatten multilinestring.input.geojson > multilinestring.input.geojson 1`] = `
{ type: 'FeatureCollection',
  features:
   [ { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry: { type: 'LineString', coordinates: [ [ 0, 0 ], [ 1, 1 ] ] } },
     { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry: { type: 'LineString', coordinates: [ [ 2, 2 ], [ 3, 3 ] ] } } ] }
`

exports[`test/flatten.js TAP flatten multipoint.input.geojson > multipoint.input.geojson 1`] = `
{ type: 'FeatureCollection',
  features:
   [ { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry: { type: 'Point', coordinates: [ 0, 0 ] } },
     { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry: { type: 'Point', coordinates: [ 1, 1 ] } } ] }
`

exports[`test/flatten.js TAP flatten multipolygon.input.geojson > multipolygon.input.geojson 1`] = `
{ type: 'FeatureCollection',
  features:
   [ { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry:
        { type: 'Polygon',
          coordinates: [ [ 0, 0 ], [ 1, 1 ], [ 4, 2 ], [ 0, 0 ] ] } },
     { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry:
        { type: 'Polygon',
          coordinates: [ [ 0, 0 ], [ 5, 5 ], [ 4, 2 ], [ 0, 0 ] ] } } ] }
`

exports[`test/flatten.js TAP flatten nullgeometry.input.geojson > nullgeometry.input.geojson 1`] = `
{ type: 'FeatureCollection',
  features:
   [ { type: 'Feature',
       geometry: null,
       properties: { name: 'SF Marina Harbor Master' } } ] }
`

exports[`test/flatten.js TAP flatten point.input.geojson > point.input.geojson 1`] = `
{ type: 'FeatureCollection',
  features:
   [ { type: 'Feature',
       properties: { name: 'SF Marina Harbor Master' },
       geometry: { type: 'Point', geometries: [ 0, 0 ] } } ] }
`
