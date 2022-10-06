<script lang="ts">
	import PersonCardHeader from './person-card-header/PersonCardHeader.svelte';
	import PersonCardInfo from './person-card-info/PersonCardInfo.svelte';
	import Card from '../../../common/components/Card.svelte';

  let className: string = "";

  export { className as class };
	export let person: Person;
</script>

<Card class={className}>
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
