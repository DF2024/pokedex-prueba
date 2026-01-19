import pokeAPI from "./PokeApi";

export const getPokemonDetails = async (id) => {
    try {
        const res = await pokeAPI.get(`/pokemon/${id}`);
        const p = res.data;

        // Transformamos los datos para que sean fáciles de usar
        return {
            id: p.id,
            name: p.name,
            image: p.sprites.other["official-artwork"].front_default,
            types: p.types?.map((t) => t.type.name) || [],
            height: p.height, // en decímetros
            weight: p.weight, // en hectogramos
            species: { name: p.species.name },
            abilities: p.abilities?.map((a) => ({
                ability: { name: a.ability.name },
                is_hidden: a.is_hidden,
            })) || [],
            power: p.base_experience,
            stats: p.stats.map(stat => ({
                name: stat.stat.name,
                base: stat.base_stat
            }))
        }
    } catch (error) {
        console.error("Error al traer detalles del Pokémon:", error);
        return null;
    }
};
