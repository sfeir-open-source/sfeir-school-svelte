import { loadPeople } from '$common/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  console.log('parent load')
	try {
    return await loadPeople();
  } catch (reason) {
    return error(reason);
  }
}