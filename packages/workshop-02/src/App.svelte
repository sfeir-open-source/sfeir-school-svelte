<script lang="ts">
	import Header from '../../common/components/Header.svelte';
	import { people } from '../../../data/people.json';

	import PersonCardModel from './PersonCardModel.svelte';
	import PersonCard from './person-card/PersonCard.svelte';
	// import PersonCard from '../__solution__/person-card/PersonCard.svelte';

	const randomPerson: Person = people[Math.floor(Math.random() * people.length)];
</script>

<Header />

<section class="section">
	<div class="container">
		<div class="columns is-centered">
			<div class="column is-half">
				<PersonCard person={randomPerson} />
			</div>
			<div class="column is-half">
				<PersonCardModel />
			</div>
		</div>
	</div>
</section>
