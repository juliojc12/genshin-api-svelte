import { writable } from 'svelte/store';

export const characters = writable([]);

const fetchCharacters = async () => {
    const response = await fetch('https://api.genshin.dev/characters/');
    const data = await response.json();
    //console.log(data)
    const loadCharacters = data.map((/** @type {{ name: any; }} */ data) => {
        return {
            name: data,
            image: `https://api.genshin.dev/characters/${data}/icon-big`,
            //infos: `https://api.genshin.dev/characters/${data}`,
        }
    });


    console.log(loadCharacters);
    characters.set(loadCharacters);

};

fetchCharacters();
