import { loadPerson } from '$common/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (params.id) {
		const person = await loadPerson(params.id);
		return { person };
	}

	throw error(404, 'Not found');
}
