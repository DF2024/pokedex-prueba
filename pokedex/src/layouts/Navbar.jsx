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
                        <label htmlFor="Search">
                        <div className="relative">
                            <input type="text" id="Search" className="bg-white mt-0.5 w-130 rounded border-gray-300 p-3 shadow-sm sm:text-sm  focus:outline-none focus:ring-0 focus:border-gray-300"/>

                            <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                            <button type="button" aria-label="Submit" className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                                </svg>
                            </button>
                            </span>
                        </div>
                        </label>
                    </div>

                    <div>
                        <Link to={'/favorites'}>
                            <button 
                                className="inline-block rounded-xl bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl" href="#">
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