const ScreamPokedex = ({pokemon}) => {
    return (
        <div>
            <div className="
                bg-[#c3cfc9]
                rounded-xl
                p-3
                mb-5
                shadow-[inset_4px_4px_8px_#a4afa9,inset_-4px_-4px_8px_#e2efeb]
                relative
                overflow-hidden
            ">
                {/* Grid retro */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none
                bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)]
                bg-[length:100%_2px]" />

                <div className="bg-white/40 rounded-lg p-2 backdrop-blur-sm border border-white/20">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-142 w-full object-contain drop-shadow-md "
                />
                </div>
            </div>
        </div>
    )
}

export default ScreamPokedex