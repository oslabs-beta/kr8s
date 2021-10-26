import React from "react";

import Tile from "../components/Tile.jsx";
import List from "../components/List.jsx";
import Header from "../components/Header.jsx";

export default function PodView(props) {
  return <div>This is the PodView Component - {props.location.rowName}</div>;
}
