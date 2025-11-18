"use client";

import "./Map.css";

import { useEffect, useId } from "react";
import { State } from "../../models";
import * as d3 from "d3";

import us_geojson from './states.geojson';
import { GeoJsonPolygon } from "@sequelize/core";
import { getState } from "@universe/fips";

export default function Map({ active }: { active: State }) {
  const mapId = useId();

  // This re-renders too much! It re-draws the entire SVG each time `active` changes.
  // A production-ready version of this map should draw once, and incrementally update.
  useEffect(() => {
    const state = getState(active);
    const width = 960;
    const height = 600;
    const projection = d3.geoAlbersUsa().scale(1280).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);
    document.getElementById(mapId)?.firstElementChild?.remove();
    const svg = d3.select(`#${mapId}`).append("svg")
      .attr("class", 'map__svg')
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.append("g").attr("class", "states")
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      .selectAll("path").data(us_geojson.features).enter().append("path").attr("d", path as any)

      svg.selectAll("path").classed('map__state', true);
      svg.selectAll("path").classed('map__state--active', function(d: GeoJsonPolygon) {
        return d.properties.name === state?.stateName;
      })
  }, [mapId, active])
  return <figure id={mapId} className="map" />
}