import { MapMethods } from "@/types/components/MapDTO";
import { TabProps } from "@/types/components/TabsDTO";
import { SearchBoxFeatureSuggestion } from "@mapbox/search-js-core";
import { motion } from "framer-motion";
import { ChangeEventHandler, useMemo, useRef } from "react";
import Map from "../Map";
import { Tabs } from "../Tabs";
import Input from "./Input";
import { MapProps } from "react-map-gl";
import Button from "../Button";
import LocationSearch from "../LocationSearch";

const defaultProps = {
	center: {
		lat: 5.68914,
		lng: -0.20212,
	},
	zoom: 10,
};

const CakeDeliveryForm = () => {
	const dropoffMap = useRef<MapMethods>(null);

	const onChooseSearchLocation = (data: SearchBoxFeatureSuggestion) => {
		const {
			geometry: {
				coordinates: [lng, lat],
			},
			properties: { mapbox_id },
		} = data;

		dropoffMap.current?.flyTo({ center: { lat, lng }, offset: [0, 50] });
		dropoffMap.current?.addMarker(
			{
				latitude: lat,
				longitude: lng,
				id: mapbox_id,
			},
			true
		);
	};

	// TODO:: IMPLEMENT CHOOSE LOCATION ON MAP
	const DELIVERY_TABS: TabProps[] = useMemo(
		() => [
			{
				id: "dropoff",
				label: "Dropoff",
				body: (
					<section className="py-5 space-y-2">
						<div className="h-60 w-80 rounded-md overflow-hidden border">
							<Map
								ref={dropoffMap}
								currentLocationCallback={console.log}
								reuseMaps
								allowGeoLocation
								allowChooseLocOnMap
								allowFullscreen
								initialViewState={{
									latitude: defaultProps.center.lat,
									longitude: defaultProps.center.lng,
									zoom: 13,
								}}
							>
								<div className="w-2/3 m-1">
									<LocationSearch
										placeholder="Where are you?"
										onSelect={onChooseSearchLocation}
									/>
								</div>
							</Map>
						</div>
					</section>
				),
			},
			{
				id: "pickup",
				label: "Pickup",
				body: (
					<section className="py-5 space-y-2">
						<div className="h-60 w-80 rounded-md overflow-hidden border">
							<Map
								reuseMaps
								initialViewState={{
									latitude: defaultProps.center.lat,
									longitude: defaultProps.center.lng,
									zoom: 13,
								}}
								dragPan={false}
								markers={[
									{
										latitude: defaultProps.center.lat,
										longitude: defaultProps.center.lng,
										id: "pickup",
									},
								]}
							/>
						</div>
						<div>
							<h1 className="text-xl">
								Agbogba Pleasant Hill, Accra
							</h1>
							<h2 className="text-base">
								Opposite High Moral School
							</h2>
						</div>
					</section>
				),
			},
		],
		[]
	);

	const onDateChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) => {
		console.log(value);
	};

	const onTimeChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) => {
		console.log(value);
	};

	return (
		<div>
			<label htmlFor="when">When do you want it?</label>
			<motion.div layout id="when" className="mt-3 mb-8 flex space-x-2">
				<Input required type="date" onChange={onDateChange} />
				<Input required type="time" onChange={onTimeChange} />
			</motion.div>
			<label htmlFor="delivery">Want us to deliver to you?</label>
			<motion.div
				layout
				id="delivery"
				className="mt-3 mb-8 flex space-x-2"
			>
				<Tabs tabs={DELIVERY_TABS} />
			</motion.div>
		</div>
	);
};

export default CakeDeliveryForm;
