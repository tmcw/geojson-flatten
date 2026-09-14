export default function flatten(gj) {
  switch (gj?.type || null) {
    case "FeatureCollection":
      gj.features = gj.features.reduce(
        (mem, feature) => mem.concat(flatten(feature)),
        [],
      );
      return gj;
    case "Feature":
      if (!gj.geometry) return [gj];
      return flatten(gj.geometry).map((geom) => {
        var data = {
          type: "Feature",
          properties: JSON.parse(JSON.stringify(gj.properties)),
          geometry: geom,
        };
        if (gj.id !== undefined) {
          data.id = gj.id;
        }
        return data;
      });
    case "MultiPoint":
      return gj.coordinates.map((_) => ({ type: "Point", coordinates: _ }));
    case "MultiPolygon":
      return gj.coordinates.map((_) => ({ type: "Polygon", coordinates: _ }));
    case "MultiLineString":
      return gj.coordinates.map((_) => ({
        type: "LineString",
        coordinates: _,
      }));
    case "GeometryCollection":
      return gj.geometries
        .map(flatten)
        .reduce((memo, geoms) => memo.concat(geoms), []);
    case "Point":
    case "Polygon":
    case "LineString":
      return [gj];
  }
}
