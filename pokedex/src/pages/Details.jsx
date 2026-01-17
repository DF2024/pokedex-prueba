import BaseStacks from "../components/stacks/BaseStacks"
import InfoPokemon from "../components/stacks/InfoPokemon"
import { useParams } from "react-router-dom";
import PokedexFrame from "../components/stacks/PokedexFrame"
import PokedexHeader from "../components/stacks/PokedexHeader"
import ScreamPokedex from "../components/stacks/ScreamPokedex"
import { useState, useEffect } from "react";
import { getPokemonDetails } from "../api/PokeDetails";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemonDetails(id).then((data) => {
        setPokemon(data);
        setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
        <div className="min-h-screen flex justify-center items-center">
        <svg class="size-8 animate-spin text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>

            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        </div>
    );
    }
    if (!pokemon) return <p className="text-center py-20 text-red-600">No se encontró el Pokémon</p>;

    
    return (
            <div className="bg-gray-300">
                <PokedexFrame>
                    <PokedexHeader id={pokemon.id} />
                    <div className="flex">
                        <ScreamPokedex pokemon={pokemon}/>
                        <div className="flex flex-col">
                            <InfoPokemon pokemon={pokemon}/>
                            <BaseStacks stats={pokemon.stats}/>
                        </div>

                    </div>
                </PokedexFrame>
            </div>
    )
}

export default PokemonDetails
