import dynamic from "next/dynamic";
import React from "react";

const Search = dynamic(() => import("./Search"), { ssr: false });

const LocationSearch: typeof Search = (props) => {
	return <Search {...props} />;
};

export default LocationSearch;
