<script>
	/**
	 * @type {{ image: any; name: any; }}
	 */
	export let characters;
	import aether from '../assets/aether.webp';
</script>

<div class="hover:bg-instagram-gradient">
	<a href={characters.name}>
		{#if !characters.name.includes('traveler')}
			<img
				src={characters.image ? characters.image : aether}
				alt={characters.name}
				class="h-auto"
			/>
			<h3 class="text-center text-2xl font-bold uppercase bg-zinc-600">{characters.name}</h3>
		{:else}
			<img src={aether} alt={characters.name} class="h-auto" />
			<h3 class="text-center text-2xl font-bold uppercase bg-zinc-600">{characters.name}</h3>
		{/if}

		<!-- <img src={characters.image ? characters.image : aether} alt={characters.name} class="h-auto" />
		<h3 class="text-center text-2xl font-bold uppercase bg-zinc-600">{characters.name}</h3> -->
	</a>
</div>
