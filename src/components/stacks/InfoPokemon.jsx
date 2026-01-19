import PokeballButton from '../stacks/PokeBallButton'
import { Link } from 'react-router-dom';

const MAX_STAT = 200;

const Icons = {
    Heart: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
    ),
    Zap: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m13 2-2 10h9L7 22l2-10H3l10-10Z"/>
        </svg>
    ),
    Shield: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
    ),
    Activity: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
    ),
    Scale: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>
        </svg>
    ),
    Star: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
    ),
    ChevronLeft: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
        </svg>
    )
    };


    const StatRing = ({ label, value, colorClass, icon }) => {
    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / MAX_STAT) * circumference;

    return (
        <div className="flex flex-col items-center group w-full p-2">
                <div className="relative flex items-center justify-center p-1 rounded-[2.5rem] bg-[#e0e0e0] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] mb-3 transition-transform group-hover:scale-105 border border-white/40 aspect-square w-full max-w-[140px]">
                    <svg className="w-full h-full transform -rotate-90 p-2">
                        <circle cx="50%" cy="50%" r={radius} stroke="rgba(0,0,0,0.06)" strokeWidth="8" fill="transparent" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            className={`transition-all duration-1000 ease-out ${colorClass}`}
                        />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <div className="p-1.5 rounded-full bg-[#e0e0e0] shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] text-gray-600 mb-1">
                            {icon}
                        </div>
                        <span className="text-base font-black text-gray-700 leading-none">{value}</span>
                    </div>
                </div>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">{label}</span>
                </div>
            );
            };


            const NeumorphicInfoCard = ({ label, value, icon, colorClass }) => (
            <div className="w-full bg-[#e0e0e0] rounded-[2rem] p-5 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border border-white/40 flex items-center gap-4 relative overflow-hidden group">
                <div className="size-12 rounded-2xl bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500">
                {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-0.5">{label}</span>
                    <span className={`text-xl font-black italic tracking-tighter ${colorClass || 'text-gray-700'}`}>{value}</span>
                </div>
            </div>
            );


            const Screw = () => (
            <div className="size-3 rounded-full bg-gray-400 shadow-inner flex items-center justify-center opacity-40">
                <div className="w-full h-[1px] bg-gray-600 rotate-45" />
            </div>
            );

            const InfoPokemon = ({ pokemon, stats, id }) => {
            if (!stats || stats.length === 0) return null;


            const STAT_CONFIG = [
                { key: "hp", label: "HP", color: "text-red-500", icon: <Icons.Heart /> },
                { key: "attack", label: "Attack", color: "text-orange-500", icon: <Icons.Zap /> },
                { key: "defense", label: "Defense", color: "text-green-500", icon: <Icons.Shield /> },
                { key: "speed", label: "Speed", color: "text-blue-500", icon: <Icons.Activity /> },
            ];


            const getStatValue = (name) => {
                const stat = stats.find((s) => s.name === name);
                return stat ? stat.base : 0;
            };

            return (
            <div className="py-5 px-4 sm:px-8 lg:px-15">
                    <div
                        className="
                        w-full max-w-7xl mx-auto
                        flex flex-col lg:flex-col
                        xl:flex-row
                        bg-[#e0e0e0]
                        rounded-3xl lg:rounded-[50px]
                        border-r-[10px] lg:border-r-[20px]
                        border-b-[8px] lg:border-b-[12px]
                        border-[#d4d4d4]
                        overflow-hidden
                        relative
                        shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]
                        "
                    >

                        <div className="hidden lg:block absolute top-6 left-6 z-30"><Screw /></div>
                        <div className="hidden lg:block absolute top-6 right-6 z-30"><Screw /></div>
                        <div className="hidden lg:block absolute bottom-6 left-6 z-30"><Screw /></div>


                        <div
                            className="
                                flex-1
                                p-6 sm:p-8 lg:p-12
                                flex flex-col
                                gap-6
                                justify-between
                                items-center
                                bg-[#e0e0e0]
                                lg:border-r
                                border-black/5
                            "
                        >

                            <div className="w-full flex justify-between items-start gap-4">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 border-4 border-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] flex items-center justify-center">
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/40 rounded-full blur-[1px]" />
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-600 shadow-inner" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner" />
                                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner" />
                                    </div>
                                </div>

                                <div className="text-right">
                                    <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-gray-800 italic uppercase tracking-tighter leading-none">
                                        {pokemon.name}
                                    </h1>
                                    <div className="inline-block mt-1 px-3 py-1 bg-gray-800 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] rounded-sm -skew-x-12">
                                        {pokemon.species?.name || "Unknown Species"}
                                    </div>
                                </div>
                            </div>


                            <div
                                className="
                                w-full
                                max-w-xs sm:max-w-md lg:max-w-full
                                aspect-square
                                bg-[#c3cfc9]
                                rounded-2xl sm:rounded-[3rem]
                                p-4 sm:p-6 lg:p-8
                                shadow-[inset_10px_10px_20px_#a4afa9,inset_-10px_-10px_20px_#e2efeb]
                                relative
                                overflow-hidden
                                "
                            >
                                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

                                <div className="w-full h-full bg-white/30 rounded-2xl sm:rounded-[2rem] flex items-center justify-center backdrop-blur-md border border-white/20 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                                    <img
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                        className="w-3/4 sm:w-4/5 h-3/4 sm:h-4/5 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)] animate-float z-10"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                        className="
                            flex-1
                            p-6 sm:p-8 lg:p-12
                            flex flex-col
                            gap-8
                            bg-[#e0e0e0]
                        "
                        >

                        <div className="w-full flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span className="text-[10px] sm:text-[11px] font-black italic tracking-[0.3em] uppercase text-gray-500">
                                        System Link v4.0
                                    </span>
                                </div>
                            <span className="text-lg sm:text-xl font-black italic tracking-widest text-gray-500">
                            #{id}
                            </span>
                        </div>


                        <div className="w-full bg-[#e0e0e0] rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-8 lg:p-10 shadow-[inset_12px_12px_24px_#bebebe,inset_-12px_-12px_24px_#ffffff]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-12 lg:gap-y-10">
                                {STAT_CONFIG.map(({ key, label, color, icon }) => (
                                    <StatRing
                                    key={key}
                                    label={label}
                                    value={getStatValue(key)}
                                    colorClass={color}
                                    icon={icon}
                                    />
                                ))}
                            </div>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <NeumorphicInfoCard
                                label="Physical Height"
                                value={`${pokemon.height} m`}
                                icon={<Icons.Star />}
                                colorClass="text-blue-600"
                            />
                            <NeumorphicInfoCard
                                label="Weight Class"
                                value={`${pokemon.weight} kg`}
                                icon={<Icons.Scale />}
                            />
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center items-center">
                            <Link to="/">
                                <PokeballButton />
                            </Link>

                            {pokemon.types?.map((t) => (
                            <div
                                key={t}
                                className="px-4 py-1.5 bg-[#333] rounded-lg shadow-[4px_4px_8px_#bebebe,-2px_-2px_6px_#ffffff]"
                            >
                                <span className="text-gray-100 text-[12px] sm:text-[13px] font-black uppercase tracking-widest">
                                {t}
                                </span>
                            </div>
                            ))}


                            <div className="relative size-20 flex items-center justify-center ml-2"> 
                                <div className="absolute inset-0 bg-[#e0e0e0] rounded-full shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]" /> 
                                    <div className="relative size-9 flex items-center justify-center"> 
                                        <div className="absolute w-full h-3 bg-[#333] rounded-sm shadow-md border-t border-white/10" /> 
                                        <div className="absolute w-3 h-full bg-[#333] rounded-sm shadow-md border-l border-white/10" /> 
                                    </div> 
                                </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                    }
                    .animate-float {
                    animation: float 4s ease-in-out infinite;
                    }
                `}</style>
            </div>
    );
    };

export default InfoPokemon;