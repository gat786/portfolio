import { readFileSync } from 'fs';

import { glob } from 'glob';

import * as yaml from 'js-yaml';

import type { PageServerLoad } from './$types';
import type { Event } from '$lib/models/event';

import { static_events_prefix } from '$lib/constants';

export const prerender = true;

export const load: PageServerLoad<{ events: Event[] }> = async () => {
	const files = (await glob([`${static_events_prefix}*/event.yaml`])).filter(
		(f) => !f.includes('_reference')
	);

	const events: Event[] = files.map((file) => {
		const raw = readFileSync(file, 'utf-8');
		const data = yaml.load(raw) as Record<string, unknown>;

		const { title, date, collaborators, gist, companies, images } = data;

		const event: Event = {
			title,
			date: new Date(date as string),
			collaborators: (collaborators as string[]) ?? [],
			gist: (gist as string) ?? '',
			companies: (companies as { name: string; url: string | null }[]) ?? [],
			images: (images as { url: string; alt: string }[]) ?? []
		};

		return event;
	});

	const sorted_events = events.sort((a, b) => b.date.getTime() - a.date.getTime());

	return { events: sorted_events };
};
