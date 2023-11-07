import { SearchBoxProps } from "@mapbox/search-js-react/dist/components/SearchBox";
import { SearchBoxFeatureSuggestion } from "@mapbox/search-js-core";

export interface LocationSearchProps extends Partial<SearchBoxProps> {
	onSelect: (data: SearchBoxFeatureSuggestion) => void;
}
