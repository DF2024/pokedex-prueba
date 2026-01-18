const MAX_STAT = 200;

const InfoPokemon = ({pokemon, stats}) => {
    if (!stats || stats.length === 0) return null;

    const STAT_CONFIG = [
        { key: "hp", label: "HP", color: "text-red-600" },
        { key: "attack", label: "Attack", color: "text-orange-600" },
        { key: "defense", label: "Defense", color: "text-green-600" },
        { key: "speed", label: "Speed", color: "text-blue-600" },
    ];

    const getStatValue = (name) => {
        const stat = stats.find((s) => s.name === name);
        return stat ? stat.base : 0;
    };

    return(
    <div
    className="
        flex flex-col
        gap-8
        mt-2 mb-4
        px-4
        max-w-6xl
        mx-auto
    "
    >
        {/* Top: Image + Info */}
        <div
            className="
            flex flex-col
            lg:flex-row
            gap-8
            items-center
            lg:items-start
            "
        >
            {/* IMAGE */}
            <div className="w-full max-w-sm">
            <div
                className="
                bg-[#c3cfc9]
                rounded-xl
                p-2 sm:p-3
                shadow-[inset_4px_4px_8px_#a4afa9,inset_-4px_-4px_8px_#e2efeb]
                relative
                overflow-hidden
                "
            >
                <div
                className="
                    absolute inset-0
                    opacity-[0.03]
                    pointer-events-none
                    bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)]
                    bg-[length:100%_2px]
                "
                />

                <div className="bg-white/40 rounded-lg p-2 backdrop-blur-sm border border-white/20">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="
                    w-full
                    object-contain
                    drop-shadow-md
                    max-h-48
                    sm:max-h-64
                    lg:max-h-[360px]
                    mx-auto
                    "
                />
                </div>
            </div>
            </div>

            {/* INFO */}
            <div className="flex flex-col gap-6 w-full">
            <h1
                className="
                text-3xl
                sm:text-5xl
                lg:text-7xl
                font-black
                text-gray-800
                uppercase
                italic
                tracking-tighter
                text-center
                lg:text-left
                "
            >
                {pokemon.name}
            </h1>

            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
                "
            >
                {/* Left info */}
                <div className="flex flex-col gap-5">
                <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                    {pokemon.types.map((t) => (
                        <span
                        key={t}
                        className={`px-4 py-1.5 rounded-2xl text-sm font-semibold text-white ${
                            t === "dragon"
                            ? "bg-emerald-800"
                            : t === "flying"
                            ? "bg-purple-900"
                            : "bg-gray-600"
                        }`}
                        >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                        </span>
                    ))}
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Height</p>
                    <span className="text-lg font-semibold">
                    {pokemon.height} m
                    </span>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Weight</p>
                    <span className="text-lg font-semibold">
                    {pokemon.weight} kg
                    </span>
                </div>
                </div>

                {/* Right info */}
                <div className="flex flex-col gap-5">
                <div>
                    <p className="text-sm text-gray-500">Species</p>
                    <h3 className="text-lg font-semibold">
                    {pokemon.species.name}
                    </h3>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Abilities</p>
                    <div className="flex flex-col gap-1">
                    {pokemon.abilities.map((a) => (
                        <span
                        key={a.ability.name}
                        className="text-lg font-semibold"
                        >
                        {a.ability.name.charAt(0).toUpperCase() +
                            a.ability.name.slice(1)}
                        {a.is_hidden ? " (Hidden)" : ""}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* STATS */}
        <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            gap-6
            mt-4
            "
        >
            {STAT_CONFIG.map(({ key, label, color }) => {
            const value = getStatValue(key);
            const percentage = Math.min(
                Math.round((value / MAX_STAT) * 100),
                100
            );

            const circumference = 2 * Math.PI * 45;
            const dash = `${(percentage / 100) * circumference} ${circumference}`;

            return (
                <div key={key} className="text-center">
                <div className="relative mx-auto size-24 sm:size-28 lg:size-32">
                    <svg className="size-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-200"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray={dash}
                        strokeLinecap="round"
                        className={`origin-center ${color}`}
                        style={{ transform: "rotate(-90deg)" }}
                    />
                    </svg>

                    <div className="absolute inset-0 grid place-content-center">
                    <span className="text-lg font-semibold">
                        {value}
                    </span>
                    </div>
                </div>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                    {label}
                </p>
                </div>
            );
            })}
        </div>
    </div>

    )
}

export default InfoPokemon