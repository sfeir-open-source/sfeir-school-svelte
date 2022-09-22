import { loadPerson } from '$common/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.id) {
		return loadPerson(params.id);
	}

	throw error(404, 'Not found');
}
