<script>
	/**
	 * @type {{ image: any; name: any; }}
	 */
	export let characters;
</script>

<div class="hover:bg-instagram-gradient">
	<a href={characters.name}>
		<img src={characters.image} alt={characters.name} class="h-auto" />
		<h3 class="text-center text-2xl font-bold uppercase bg-zinc-600">{characters.name}</h3>
	</a>
</div>
