<script lang="ts">
	import PersonCardFigure from './person-card-figure/PersonCardFigure.svelte';
	import PersonCardHeader from './person-card-header/PersonCardHeader.svelte';
	import PersonCardInfo from './person-card-info/PersonCardInfo.svelte';

	import Card from './../card/Card.svelte';

	export let person: Person;

	export let isEditable: boolean = false;
</script>

<Card class="person-card {$$props.class || ''}">
	<div>
		<PersonCardHeader photo={person.photo}>
			<a slot="title" href={`/person/${person.id}`}>{person.firstname} {person.lastname}</a>
			<span slot="subtitle">{person.position}</span>
		</PersonCardHeader>

		<PersonCardInfo iconName="email">
			<a href={`mailto:${person.email}`}>{person.email}</a>
		</PersonCardInfo>

		<PersonCardInfo iconName="phone">
			<a href={`tel:${person.phone}`}>{person.phone}</a>
		</PersonCardInfo>

		{#if person.managerId !== ''}
			<PersonCardInfo iconName="supervisor_account">
				<a href={`/person/${person.managerId}`}>{person.manager}</a>
			</PersonCardInfo>
		{/if}
	</div>

	<svelte:fragment slot="footer">
		{#if isEditable}
			<a href={`/person/${person.id}/edit`} class="card-footer-item"> Edit information </a>
		{/if}
	</svelte:fragment>
</Card>
