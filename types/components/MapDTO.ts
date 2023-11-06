import {
	MapProps as MapboxProps,
	MarkerProps as MapboxMarkerProps,
	MapRef as MapboxRef,
} from "react-map-gl";

export interface Marker extends MapboxMarkerProps {
	id?: string;
}

export interface MapMethods {
	flyTo: (...data: Parameters<MapboxRef["flyTo"]>) => void;
	addMarker: (marker: Marker, clear?: boolean) => void;
	removeMarker: (id: string) => void;
	removeAllMarkers: () => void;
}

export interface MapProps extends MapboxProps {
	markers?: Marker[];
	allowGeoLocation?: boolean;
	allowFullscreen?: boolean;
	allowChooseLocOnMap?: boolean;
	currentLocationCallback?: () => void;
}
