import { Outlet, Link} from "react-router-dom"
import Logo from '../assets/logo/pokedex-logo.png'

const Navbar = () => {
    return(
    <header>
        <nav
            className="
            flex
            items-center
            justify-between
            bg-gray-300
            px-4
            sm:px-8
            lg:px-16
            py-3
            sm:py-4
            "
        >
            {/* Logo */}
            <Link to="/" className="flex items-center">
            <img
                src={Logo}
                alt="pokedexlogo"
                className="
                w-32
                sm:w-40
                lg:w-48
                "
            />
            </Link>

            {/* Favorites */}
            <Link to="/favorites">
                <button
                    className="
                    w-12 h-12
                    sm:w-14 sm:h-14
                    lg:w-15 lg:h-15
                    rounded-full
                    bg-blue-500
                    border-4 border-[#e0e0e0]
                    shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                    flex items-center justify-center
                    transition 
                    delay-150 
                    duration-300 
                    ease-in-out 
                    hover:-translate-y-1 
                    hover:scale-110 
                    hover:bg-red-600
                    "
                >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-7 lg:w-8">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ffffff"></path> 
                    </g>
                </svg>
                </button>
            </Link>
        </nav>

        <Outlet />
    </header>

    )
}

export default Navbar