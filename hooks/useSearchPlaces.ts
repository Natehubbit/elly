import { MAPBOX_KEY } from "@/constants/config";
import { debounce } from "@/utils/helpers";
import {
	SearchBoxSuggestion,
	SearchBoxFeatureSuggestion,
} from "@mapbox/search-js-core";
import { useSearchBoxCore, useSearchSession } from "@mapbox/search-js-react";
import { useState } from "react";

const useSearchPlaces = () => {
	const search = useSearchBoxCore({
		accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
		country: "GH",
		language: "en",
	});
	const { sessionToken } = useSearchSession(search);

	const [places, setPlaces] = useState<SearchBoxSuggestion[]>();
	const [loading, setLoading] = useState(true);

	const getSuggestions = async (val: string) => {
		try {
			setLoading(true);
			const result = await search.suggest(val, {
				sessionToken,
				country: "GH",
				language: "en",
			});
			setPlaces(
				result.suggestions.filter(
					(item) => item.feature_type !== "category"
				)
			);
		} catch (error) {
			setPlaces([]);
		} finally {
			setLoading(false);
		}
	};

	const onSelect = async (
		id: string,
		cb: (data: SearchBoxFeatureSuggestion) => void
	) => {
		const place = places?.find((item) => item.mapbox_id === id)!;
		console.log("PLace", place);
		const result = await search.retrieve(place, { sessionToken });
		clearPlaces();
		cb(result.features[0]);
	};

	const onValueChange = (val?: string) => {
		debounce(getSuggestions)(val);
	};

	const clearPlaces = () => {
		setPlaces(undefined);
	};

	return {
		places,
		loading,
		onValueChange,
		onSelect,
		clearPlaces,
	};
};

export default useSearchPlaces;
