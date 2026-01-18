import PokemonCard from "../components/cards/PokemonCard"
import { getPokemons } from "../api/PokeInfo";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemons()
        .then((data) => {
            setPokemon(Array.isArray(data) ? data : []);
        })
        .finally(() => setLoading(false));
    }, []);

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

    if (!pokemon) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div role="alert" class="w-[600px] border-2 bg-red-100 p-4 text-red-900 shadow-[4px_4px_0_0]">
                    <div class="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="mt-0.5 size-4">
                        <path fill-rule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path>
                        </svg>

                        <strong class="block flex-1 leading-tight font-semibold">
                        No se encontró la información solicitada
                        </strong>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <PokemonCard pokemon={pokemon}/>
        </div>
    )
}

export default HomePage