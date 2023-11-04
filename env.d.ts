declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_MAPBOX_KEY: string;
			NEXT_PUBLIC_GOOGLE_MAP_KEY: string;
		}
	}
}

export {};
