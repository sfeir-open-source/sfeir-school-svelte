<script lang="ts">
	import Header from '../../common/components/Header.svelte';
	import PersonCard from './person-card/PersonCard.svelte';
	import PersonCardModel from './PersonCardModel.svelte';

	const PERSON: Person = {
		id: '5763cd4d9d2a4f259b53c901',
		photo: 'https://randomuser.me/portraits/women/85.jpg',
		firstname: 'Leanne',
		lastname: 'Woodard',
		position: 'Developer',
		email: 'woodard.l@acme.com',
		phone: '0784112248',
		manager: 'Erika',
		managerId: '5763cd4d3b57c672861bfa1f',
		gender: 'f'
	};
</script>

<Header />

<section class="section">
	<div class="container">
		<div class="columns is-centered">
			<div class="column is-half"><PersonCard person={PERSON} /></div>
			<div class="column is-half"><PersonCardModel /></div>
		</div>
	</div>
</section>
