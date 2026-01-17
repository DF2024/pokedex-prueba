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

    if (loading) return <p className="text-center py-20">Cargando Pokémon...</p>;
    if (!pokemon) return <p className="text-center py-20 text-red-600">No se encontró el Pokémon</p>;


    
    return (
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
    )
}

export default PokemonDetails
