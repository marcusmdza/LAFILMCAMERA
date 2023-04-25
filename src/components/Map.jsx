import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [120.0, -34.0, 0],
        center: [0, 0],
        scale: 2500,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#4E515A"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-121.2437, 38.0522]}
        dx={-70}
        dy={40}
        connectorProps={{
          stroke: "#ffc906",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-10"
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize={32}
          fill="#ffc906"
        >
          {"Los Angeles"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
