import useSearchPlaces from "@/hooks/useSearchPlaces";
import { SearchBoxFeatureSuggestion } from "@mapbox/search-js-core";
import { SearchBoxProps } from "@mapbox/search-js-react/dist/components/SearchBox";
import { ChangeEventHandler, FC, useRef } from "react";
import Input from "./Form/Input";
import useOutsideClick from "@/hooks/useOutsideClick";

interface LocationSearchProps extends Partial<SearchBoxProps> {
	onSelect: (data: SearchBoxFeatureSuggestion) => void;
}

export const LocationSearch: FC<LocationSearchProps> = (props) => {
	const listRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const { places, onValueChange, onSelect, clearPlaces } = useSearchPlaces();

	useOutsideClick(
		listRef,
		() => {
			console.log("CLEAERING PLACES");
			clearPlaces();
		},
		!!places?.length
	);

	const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		onValueChange(target.value);
	};

	const onChoose = (id: string) => {
		onSelect(id, props.onSelect);
	};

	console.log("Places", places);

	return (
		<div className="relative">
			<Input
				className="w-full"
				placeholder="Where are you?"
				onChange={onChange}
				onFocus={onChange}
				ref={inputRef}
			/>
			{places && (
				<div
					ref={listRef}
					className="absolute top-11 overflow-hidden cursor-pointer rounded-lg bg-white w-full"
				>
					<ul className="max-h-[8rem] z-50 overflow-y-auto">
						{places.map((place) => {
							const label = `${place.name}, ${place.place_formatted}`;
							const onClickItem = () => {
								onChoose(place.mapbox_id);
								inputRef.current!.value = label;
							};
							return (
								<li
									onClick={onClickItem}
									key={place.mapbox_id}
									className="p-2 hover:bg-blue-300"
								>
									{label}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};
