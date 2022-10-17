<script lang="ts">
  import { createEventDispatcher } from 'svelte';

	import PersonCardHeader from './person-card-header/PersonCardHeader.svelte';
	import PersonCardInfo from './person-card-info/PersonCardInfo.svelte';
	import Card from '../Card.svelte';

	export let person: Person;
  export let isEditable: boolean = false;

  let classNames: string = '';
  export { classNames as class };

  const dispatch = createEventDispatcher();
</script>

<Card class={classNames}>
	<PersonCardHeader photo={person.photo}>
		<a slot="title" href={`/person/${person.id}`}>{person.firstname} {person.lastname}</a>
		<span slot="subtitle">{person.position}</span>
	</PersonCardHeader>

	<PersonCardInfo iconName="envelope">
		<a href={`mailto:${person.email}`}>{person.email}</a>
	</PersonCardInfo>

	<PersonCardInfo iconName="phone">
		<a href={`tel:${person.phone}`}>{person.phone}</a>
	</PersonCardInfo>

	{#if person.managerId !== ''}
		<PersonCardInfo iconName="user-group">
			<a href={`/person/${person.managerId}`}>{person.manager}</a>
		</PersonCardInfo>
	{/if}

  <svelte:fragment slot="footer">
		{#if isEditable}
    <div class="card-footer-item">
			<button class="button is-ghost" on:click={() => dispatch('edit')}> Edit information </button>
    </div>
		{/if}
	</svelte:fragment>
</Card>
