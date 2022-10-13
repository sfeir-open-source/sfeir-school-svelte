<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let currentPage: string = '';
</script>

<div class="navbar-end">
	<a
		href="/#"
		on:click|preventDefault={() => dispatch('clickLink', 'LIST')}
		class="navbar-item"
		class:is-active={currentPage === 'LIST'}
		aria-label="List"
	>
		<span class="icon">
			<i class="fa-solid fa-list" />
		</span>
	</a>

	<a
		href="/#"
		on:click|preventDefault={() => dispatch('clickLink', 'CAROUSEL')}
		class="navbar-item"
		class:is-active={currentPage === 'CAROUSEL'}
		aria-label="Carousel"
	>
		<span class="icon">
			<i class="fa-solid fa-layer-group" />
		</span>
	</a>
</div>
