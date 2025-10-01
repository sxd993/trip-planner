import logo from '../../assets/logo.svg'

export const Header = () => {
    return (
        <header className="sticky top-0 bg-white/90 border-[0.5px] border-gray-500 p-2 backdrop-blur supports-[backdrop-filter]:bg-white/80 z-50">
            <div className="flex items-center justify-center gap-4 rounded-xl border border-transparent px-4 py-2 transition-all duration-300 hover:border-slate-100 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 shadow-lg">
                    <img width={32} height={32} src={logo} alt="trip-planner" className="drop-shadow-sm" />
                </div>
                <div className="flex flex-col text-center leading-tight text-slate-700">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Trip Planner</span>
                    <span className="text-3xl font-semibold text-slate-800">
                        Planner <span className="font-black text-blue-600">Tracker</span>
                    </span>
                </div>
            </div>
        </header>
    )
}
