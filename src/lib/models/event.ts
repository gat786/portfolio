import type { Image } from '$lib/models/image';

export type EventCompany = {
	name: string;
	url: string | null;
};

export type Event = {
	title: string;
	date: Date;
	collaborators: string[];
	gist: string;
	companies: EventCompany[];
	images: Image[];
};
