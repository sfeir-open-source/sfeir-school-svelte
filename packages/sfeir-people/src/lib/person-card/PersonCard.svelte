<script lang="ts">
	import PersonCardFigure from './person-card-figure/PersonCardFigure.svelte';
	import PersonCardHeader from './person-card-header/PersonCardHeader.svelte';
	import PersonCardInfo from './person-card-info/PersonCardInfo.svelte';

  import Card from './../card/Card.svelte';

	export let person: Person;

	export let isEditable: boolean = false;
</script>

<Card class="person-card {$$props.class || ""}">
	<div>
		<PersonCardFigure name={person.firstname} photoUrl={person.photo} />

		<PersonCardHeader>
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

	{#if isEditable}
		<div class="mdl-card__actions mdl-card--border">
			<a
				href={`/person/${person.id}/edit`}
				class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
			>
				Edit information
			</a>
		</div>
	{/if}
  </Card>

<style>
	:global(.person-card) {
		width: 420px;
	}
	:global(.person-card) a {
		text-decoration: none;
	}
</style>
