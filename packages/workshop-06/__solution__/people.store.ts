import { derived, writable } from "svelte/store";
import { loadPeople } from '$common/utils';

export const people = writable(null);

export const isPeopleLoading = derived(people, $people => $people == null);

export const refreshPeople = () => {
  people.set(null);
  loadPeople().then(people.set);
}
