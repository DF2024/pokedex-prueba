import { Outlet, Link} from "react-router-dom"
import Logo from '../assets/logo/pokedex-logo.png'



const Navbar = () => {
    return(
        <header>
            <div >
                <nav className="flex justify-between items-center px-20 py-5">
                    <div>
                        <Link to={'/'}>
                            <img src={Logo} alt="pokedexlogo" className="w-50"/>
                        </Link>
                    </div>

                    <div>
                        <Link to={'/favorites'}>
                            <button 
                                className="inline-block rounded-xl bg-red-900 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl" href="#">
                                Favorites
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
            <Outlet/>
        </header>
    )
}

export default Navbar