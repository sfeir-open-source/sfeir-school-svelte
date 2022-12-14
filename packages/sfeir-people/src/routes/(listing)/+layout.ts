import { loadPeople } from '$common/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	try {
		const people = await loadPeople();
		return { people };
	} catch (reason) {
		return error(reason);
	}
}
