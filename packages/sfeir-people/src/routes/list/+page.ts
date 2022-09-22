import { loadPeople } from '$common/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load() {

		return {
      test: "toto"
    };
}
