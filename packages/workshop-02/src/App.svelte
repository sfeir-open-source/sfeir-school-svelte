<script lang="ts">
	import Header from '../../common/components/header/Header.svelte';
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
        <p class="has-text-centered">Component to Implement</p><br/>

				<PersonCard person={randomPerson} />
			</div>

			<div class="column is-half">
        <p class="has-text-centered">Model</p><br/>

				<PersonCardModel />
			</div>

		</div>
	</div>
</section>
