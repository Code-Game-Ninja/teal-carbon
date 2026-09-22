"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapNodes, mapCenter, ecosystems, type MapNode } from "@/data/site";

const ecoColor = (key: MapNode["eco"]) =>
  ecosystems.find((e) => e.key === key)?.hex ?? "#1E6E63";

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(mapNodes.map((n) => [n.lat, n.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);
  return null;
}

export default function LeafletMap({
  selectedId,
  onSelect,
}: {
  selectedId: string;
  onSelect: (n: MapNode) => void;
}) {
  return (
    <MapContainer
      center={mapCenter}
      zoom={8}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ background: "var(--color-mist)" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <FitBounds />
      {mapNodes.map((n) => {
        const sel = n.id === selectedId;
        const color = ecoColor(n.eco);
        return (
          <CircleMarker
            key={n.id}
            center={[n.lat, n.lng]}
            radius={sel ? 12 : 8}
            pathOptions={{
              color: "#ffffff",
              weight: 2,
              fillColor: color,
              fillOpacity: sel ? 1 : 0.85,
            }}
            eventHandlers={{ click: () => onSelect(n) }}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              {n.name}
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
