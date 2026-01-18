const PokeballButton = ({ onClick }) => (
    <button 
        onClick={onClick}
        className="group relative flex items-center gap-3 px-6 py-3 bg-[#e0e0e0] rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe] transition-all duration-300"
    >
        <div className="relative size-8 rounded-full border-4 border-gray-800 bg-white overflow-hidden transition-transform group-hover:rotate-180 duration-500 shadow-sm">
            <div className="absolute top-0 w-full h-1/2 bg-red-600 border-b-2 border-gray-800" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 bg-white border-2 border-gray-800 rounded-full z-10" />
        </div>
        <span className="font-black text-gray-700 text-sm tracking-widest uppercase">Volver</span>
    </button>
);

export default PokeballButton