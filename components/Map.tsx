"use client";

import React, { FC, useEffect, useRef } from "react";
import mapbox, { MapboxOptions } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { MAPBOX_KEY } from "@/constants/config";

mapbox.accessToken = MAPBOX_KEY;

const defaultProps = {
	center: {
		lat: 5.68914,
		lng: -0.20212,
	},
	zoom: 13,
};
console.log(mapbox.accessToken);
const Map: FC = (props) => {
	const container = useRef<MapboxOptions["container"]>();
	const map = useRef<mapbox.Map | null>(null);
	const marker = useRef<mapbox.Marker | null>(null);

	useEffect(() => {
		if (!map.current) {
			map.current = new mapbox.Map({
				container: container.current ?? "",
				style: "mapbox://styles/mapbox/streets-v12",
				center: defaultProps.center,
				zoom: defaultProps.zoom,
			});
		}

		console.log("MAEKWE", marker.current);
		if (!marker.current) {
			marker.current = new mapbox.Marker()
				.setOffset([240, -240])
				.setLngLat(defaultProps.center)
				.addTo(map.current);
		}
	}, []);

	return <div ref={container as any} className="h-full w-full" />;
};

export default Map;
