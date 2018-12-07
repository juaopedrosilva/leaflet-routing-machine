import { MapLayer} from "react-leaflet"
import { withLeaflet } from "react-leaflet"
import L from "leaflet"
import "leaflet-routing-machine/src"

class MapRouting extends MapLayer {
  createLeafletElement() {
    const waypoints = [
      L.latLng(-3.7264051, -38.5262218),
      L.latLng(-3.7531659, -38.5589955), 
    ] 
    const  leafletElement = L.Routing.control({
      waypoints, 
      show: false,
      lineOptions: {
        styles: [
          {color: '#FFF', opacity: 0.15, weight: 9},
          {color: '#FF9A00', opacity: 0.8, weight: 6},
          {color: '#FFF', opacity: 0.5, weight: 2}
        ]
      },
    }).addTo(this.props.map.current.leafletElement) 
    return  leafletElement.getPlan() 
  }
} 
export default withLeaflet(MapRouting)
