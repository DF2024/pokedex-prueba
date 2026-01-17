const MAX_STAT = 200;

const BaseStacks = ({ stats }) => {
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

    return (
        <div className="flex gap-10 justify-between mt-10">
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
                <div
                className="relative mx-auto size-32"
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                >
                <svg className="size-full" viewBox="0 0 100 100">
                    {/* fondo */}
                    <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-200"
                    />

                    {/* progreso */}
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

                {/* valor real de la API */}
                <div className="absolute inset-0 grid place-content-center">
                    <span className="text-xl font-semibold text-gray-900">
                    {value}
                    </span>
                </div>
                </div>

                <p className="mt-2 text-sm font-semibold text-gray-700">
                {label}
                </p>
            </div>
            );
        })}
        </div>
    );
};

export default BaseStacks;
