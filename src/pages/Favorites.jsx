import PokeballButton from '../components/stacks/PokeBallButton'
import PokemonFavoritesCard from "../components/cards/PokemonFavoritesCard";
import { Link } from 'react-router-dom';

const Favorites = () => {

    return (
        <div>
            <h1 className="text-center py-5 text-3xl sm:text-4xl lg:text-6xl font-black text-gray-800 italic uppercase tracking-tighter leading-none">
                Favorites
            </h1>
            <PokemonFavoritesCard/>
            <div className='flex justify-center pb-10'>
                <Link to="/">
                    <PokeballButton />
                </Link>
            </div>
        </div>
    );
};

export default Favorites;
