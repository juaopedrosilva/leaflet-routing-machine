import React, { Component } from "react"
import { Map, TileLayer } from "react-leaflet"

import MapRouting from "../MapRouting"

class MainMap extends Component {
  constructor() {
    super()
    this.map = React.createRef()
  }

  render() {
    return (
      <Map style={{ width: "100vw", height: "100vh" }} ref={this.map}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />

        <MapRouting map={this.map} />
      </Map>
    )
  }
}

export default MainMap
