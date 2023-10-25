declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_MAPBOX_KEY: string;
		}
	}
}

export {};
