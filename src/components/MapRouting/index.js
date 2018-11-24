import { MapLayer } from "react-leaflet";
import { withLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/src";

class MapRouting extends MapLayer {
  createLeafletElement() {
    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(-21.19382, -47.84583986),
        L.latLng(-21.18616, -47.83429),
        L.latLng(-21.17865, -47.81170338)
      ],
      show: false
    }).addTo(this.props.map.current.leafletElement);

    return leafletElement.getPlan();
  }
}

export default withLeaflet(MapRouting);
