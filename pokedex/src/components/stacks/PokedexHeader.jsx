import MainLens from "./MainLens"
import StatusLights from "./StatusLights"

const PokedexHeader = ({ id }) => {
    
    return (
        <header className="flex items-start justify-between">
            <div className="flex gap-2">
                <MainLens />
                <StatusLights />
            </div>

            <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-200 px-2 rounded shadow-inner">
                {id}
            </span>
        </header>
    )
}

export default PokedexHeader
