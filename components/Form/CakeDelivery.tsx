import { MapMethods } from "@/types/components/MapDTO";
import { TabProps } from "@/types/components/TabsDTO";
import { SearchBoxFeatureSuggestion } from "@mapbox/search-js-core";
import { motion } from "framer-motion";
import { ChangeEventHandler, useMemo, useRef } from "react";
import { LocationSearch } from "../LocationSearch";
import Map from "../Map";
import { Tabs } from "../Tabs";
import Input from "./Input";

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

		console.log("IIIDDDD", data);

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

	// dropoffMap.current.

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
					<section className="flex py-5 space-x-2">
						<div className="h-60 w-80 rounded-md overflow-hidden border">
							<Map
								reuseMaps
								initialViewState={{
									latitude: defaultProps.center.lat,
									longitude: defaultProps.center.lng,
									zoom: 13,
								}}
								markers={[
									{
										latitude: defaultProps.center.lat,
										longitude: defaultProps.center.lng,
									},
								]}
							/>
						</div>
						<div>
							<h1>Agbogba Pleasant Hill, Accra</h1>
							<h2>Opposite High Moral School</h2>
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

	return (
		<div>
			<label htmlFor="when">When do you want it?</label>
			<motion.div layout id="when" className="mt-3 mb-8 flex space-x-2">
				<Input type="date" onChange={onDateChange} />
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
