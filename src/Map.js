import * as React from "react";
import ReactMapGL, { NavigationControl, Marker, Layer } from "react-map-gl";
import Location from "./location.png";

const MAPBOX_TOKEN =
  ""; // Set your mapbox token here

const waterLayer = {
  id: "water",
  source: "mapbox-streets",
  "source-layer": "water",
  type: "fill",
  paint: {
    "fill-color": "#00ffff",
  },
};

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  // eslint-disable-next-line
  const [waterColor, setWaterColor] = React.useState("blue");

  const navControlStyle = {
    right: 10,
    bottom: 10,
  };

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      <Layer {...waterLayer} paint={{ "fill-color": waterColor }} />
      <NavigationControl
        style={navControlStyle}
        showCompass={true}
        showZoom={true}
      />
      <Marker
        latitude={37.78}
        longitude={-122.41}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img src={Location} alt="pin" height="40px" width="30px" />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
