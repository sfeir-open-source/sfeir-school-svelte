import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.id) {
		return fetch(`http://localhost:4000/people/${params.id}`)
			.then((res) => res.json());
	}

	throw error(404, 'Not found');
}
