const PokedexFrame = ({ children }) => {
    return (
        <div className="mt-2 flex justify-center">
            <div
                className="
                flex flex-col
                bg-[#e0e0e0]
                w-full max-w-[1220px]
                rounded-[30px]
                border-r-[12px] border-b-[8px] border-[#d4d4d4]
                "
            >
                <div className="p-7 flex flex-col gap-6">
                {children}
                </div>
            </div>
        </div>
    )
}

export default PokedexFrame
