<script lang="ts">
	export let iconName: string;
</script>

<p>
	<span class="icon">
		<i class="fa-solid fa-{iconName}" />
	</span>
	&nbsp;
	<slot />
</p>

<style>
	p {
		margin: 0;
		display: flex;
		margin-bottom: 4px;
	}
</style>
