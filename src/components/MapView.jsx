import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ products }) {
  const center = [17.385, 78.4867]; // default city center

  return (
    <div className="flex-col backdrop-blur-lg h-80  w-cover m-2  rounded-lg overflow-hidden">
      <div className="w-cover  text-center font-serif font-bold text-xl bg-[crimson]/90 text-white py-1 " >Map</div>
      <MapContainer center={center} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {products.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>
              <strong>{p.name}</strong>
              <br />
              <strong>{p.store}</strong>
              <br />
              ₹{p.price}
              <br />
              {p.distance} km away
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
