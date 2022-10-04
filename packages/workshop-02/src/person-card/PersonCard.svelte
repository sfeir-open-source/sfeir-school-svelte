<script lang="ts">
	import Card from '../../../common/components/Card.svelte';

	// Remove ts-ignore when components are implemented
	// @ts-ignore
	import PersonCardHeader from './person-card-header/PersonCardHeader.svelte';
	// @ts-ignore
	import PersonCardInfo from './person-card-info/PersonCardInfo.svelte';

	export let person: Person;

	/**
	 * Instructions:
	 * 1. Implement PersonCardHeader & PersonCardInfo components
	 * 2. Use person to pass data to PersonCardHeader & PersonCardInfo
	 */
</script>

<Card>
	<PersonCardHeader photo="https://randomuser.me/portraits/women/85.jpg">
		<a slot="title" href="/person/5763cd4d9d2a4f259b53c901">Leanne Woodard</a>
		<span slot="subtitle">Developer</span>
	</PersonCardHeader>

	<PersonCardInfo iconName="envelope">
		<a href="mailto:woodard.l@acme.com">woodard.l@acme.com</a>
	</PersonCardInfo>

	<PersonCardInfo iconName="phone">
		<a href="tel:0784112248">0784112248</a>
	</PersonCardInfo>

	<PersonCardInfo iconName="user-group">
		<a href="/person/5763cd4d3b57c672861bfa1f">Erika</a>
	</PersonCardInfo>
</Card>
