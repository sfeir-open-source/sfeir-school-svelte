<script lang="ts">
  import Card from '../../../common/components/Card.svelte';

	// TODO: Remove ts-ignore when components are implemented
	// @ts-ignore
	import PersonCardHeader from './person-card-header/PersonCardHeader.svelte';
	// @ts-ignore
	import PersonCardInfo from './person-card-info/PersonCardInfo.svelte';

	export let person: Person;
</script>

<Card>
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
</Card>
