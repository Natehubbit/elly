"use client";

import React, {
	FC,
	forwardRef,
	memo,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
	useCallback,
} from "react";
import { MAPBOX_KEY } from "@/constants/config";
import MapComponent, {
	FullscreenControl,
	GeolocateControl,
	MapLayerMouseEvent,
	MapRef,
	MapboxGeoJSONFeature,
	Marker as MarkerComponent,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapMethods, MapProps, Marker } from "@/types/components/MapDTO";
import Button from "./Button";
import IconButton from "./IconButton";

const Markers: FC<{ markers?: Marker[] }> = memo(({ markers }) => {
	return markers?.map((marker) => {
		console.log("ID", marker.id);
		return <MarkerComponent key={marker.id} {...marker} anchor="bottom" />;
	});
});

Markers.displayName = "Markers";

const Map = forwardRef<MapMethods, MapProps>(
	(
		{
			allowFullscreen,
			allowGeoLocation,
			allowChooseLocOnMap,
			markers,
			currentLocationCallback,
			children,
			...props
		},
		ref
	) => {
		const map = useRef<MapRef>(null);
		const [markerItems, setMarkerItems] = useState(markers);
		const [selectLocation, setSelectLocation] = useState(false);

		const addMarker = (newMarker: Marker, clear = false) => {
			setMarkerItems((items) => {
				if (clear) {
					return [newMarker];
				}
				return items ? [...items, newMarker] : [newMarker];
			});
		};

		const removeMarker = (id: string) => {
			setMarkerItems((items) => items?.filter((item) => item.id !== id));
		};

		const removeAllMarkers = () => {
			setMarkerItems(undefined);
		};

		useEffect(() => {
			setMarkerItems(markers);
		}, [markers]);

		useImperativeHandle(
			ref,
			() => ({
				flyTo(...args) {
					map.current?.flyTo(...args);
				},
				addMarker,
				removeMarker,
				removeAllMarkers,
			}),
			[]
		);

		const resetMap = () => {
			removeAllMarkers();
			const { latitude, longitude } = props.initialViewState!;
			map.current?.flyTo({
				center: { lat: latitude!, lng: longitude! },
			});
		};

		const toggleMapSelect = () => {
			setSelectLocation((value) => {
				const newValue = !value;
				if (!newValue) {
					resetMap();
				}
				return newValue;
			});
		};

		const onSelectLocationOnMap = useCallback(
			(e: MapLayerMouseEvent) => {
				if (!selectLocation) return;
				const { lngLat } = e;
				map.current?.flyTo({ center: lngLat });
				addMarker(
					{
						latitude: lngLat.lat,
						longitude: lngLat.lng,
						id: `${Object.values(lngLat)}`,
					},
					true
				);
			},
			[selectLocation]
		);

		const onOk = () => {
			setSelectLocation(false);
		};

		return (
			<MapComponent
				ref={map}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
				mapStyle="mapbox://styles/mapbox/streets-v9"
				style={{ height: "100%", width: "100%" }}
				onClick={onSelectLocationOnMap}
				{...props}
			>
				{children}
				<Markers markers={markerItems} />
				{allowGeoLocation && (
					<GeolocateControl onGeolocate={currentLocationCallback} />
				)}
				{allowFullscreen && <FullscreenControl />}
				{allowChooseLocOnMap && (
					<div className="flex w-full absolute bottom-1 justify-center ml-8 space-x-2">
						<button
							type="button"
							onClick={toggleMapSelect}
							className="bg-white shadow-lg self-center rounded-lg cursor-pointer overflow-hidden py-2 px-6"
						>
							{!selectLocation ? "Choose on map" : "Cancel"}
						</button>
						{selectLocation && (
							<button
								type="button"
								onClick={onOk}
								className="bg-white shadow-lg self-center rounded-lg cursor-pointer overflow-hidden py-2 px-6"
							>
								Ok
							</button>
						)}
					</div>
				)}
			</MapComponent>
		);
	}
);

Map.displayName = "Map";

export default Map;
