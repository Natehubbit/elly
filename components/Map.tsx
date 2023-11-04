"use client";

import React, {
	FC,
	forwardRef,
	memo,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { MAPBOX_KEY } from "@/constants/config";
import MapComponent, {
	FullscreenControl,
	GeolocateControl,
	MapRef,
	Marker as MarkerComponent,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapMethods, MapProps, Marker } from "@/types/components/MapDTO";

const Markers: FC<{ markers?: Marker[] }> = memo(({ markers }) => {
	return markers?.map((marker) => {
		return <MarkerComponent key={marker.id} {...marker} anchor="bottom" />;
	});
});

const Map = forwardRef<MapMethods, MapProps>(
	(
		{
			allowFullscreen,
			allowGeoLocation,
			markers,
			currentLocationCallback,
			children,
			...props
		},
		ref
	) => {
		const map = useRef<MapRef>(null);
		const [markerItems, setMarkerItems] = useState(markers);

		useEffect(() => {
			setMarkerItems(markers);
		}, [markers]);

		useImperativeHandle(
			ref,
			() => ({
				flyTo(...args) {
					console.log("SDF", args);
					map.current?.flyTo(...args);
				},
				addMarker(newMarker: Marker, clear) {
					setMarkerItems((items) => {
						if (clear) {
							return [newMarker];
						}

						return items ? [...items, newMarker] : [newMarker];
					});
				},
				removeMarker(id: string) {
					setMarkerItems((items) =>
						items?.filter((item) => item.id !== id)
					);
				},
			}),
			[]
		);

		return (
			<MapComponent
				ref={map}
				mapboxAccessToken={MAPBOX_KEY}
				mapStyle="mapbox://styles/mapbox/streets-v9"
				style={{ height: "100%", width: "100%" }}
				{...props}
			>
				{children}
				<Markers markers={markerItems} />
				{allowGeoLocation && (
					<GeolocateControl onGeolocate={currentLocationCallback} />
				)}
				{allowFullscreen && <FullscreenControl />}
			</MapComponent>
		);
	}
);

export default Map;
