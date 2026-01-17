import axios from "axios";
import pokeAPI from "./PokeApi";

export const getPokemons = async () => {
    try {
        const {data} = await pokeAPI.get("/pokemon?limit=8")
        
        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            const p = res.data;

                return {
                    id: p.id,
                    name: p.name,
                    image: p.sprites.other["official-artwork"].front_default,
                    types: p.types.map(t => t.type.name),
                    power: p.base_experience,
                    link: `/details/${p.id}`
                };
            })
        )
        
        return pokemonDetails
    } catch (error) {
        setError("Error al cargar los Pokémon", error);
        return []
    }
}
