const lights = ["red-600", "yellow-500", "green-500"]

const StatusLights = () => (
    <div className="flex gap-1 mt-1">
        {lights.map(color => (
        <div
            key={color}
            className={`w-2 h-2 rounded-full bg-${color} shadow-inner`}
        />
        ))}
    </div>
)

export default StatusLights