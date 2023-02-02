<script>
	import '../app.css';
	import CharactersCard from '../components/charactersCard.svelte';
	import { characters } from '../stores/fetchCharacters';
	// AOS.init();
</script>

<div class="max-w-[1080px] flex flex-col mx-auto">
	<h1 class="text-center text-4xl font-bold uppercase py-6">Genshin Characters</h1>
	<div class="flex flex-wrap">
		{#each $characters as character}
			<!-- svelte-ignore component-name-lowercase -->
			{#if character.image != null}
				<div class="w-[250px] border-2 m-2" data-aos="fade-in">
					<CharactersCard characters={character} />
				</div>
			{/if}
		{/each}
	</div>
</div>
