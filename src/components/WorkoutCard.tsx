interface Props {
  title: string;
  description: string;
  duration: string;
  intensity: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const intensityColor = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

export default function WorkoutCard({ title, description, duration, intensity, category }: Props) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">{category}</span>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${intensityColor[intensity]}`}>
          {intensity}
        </span>
      </div>
      <h3 className="heading-md">{title}</h3>
      <p className="text-body text-[var(--text-secondary)] flex-1">{description}</p>
      <div className="flex items-center gap-4 text-small text-[var(--text-secondary)] pt-2 border-t border-[var(--card-border)]">
        <span>⏱ {duration}</span>
        <button className="text-[#e8739a] hover:underline ml-auto">Learn More →</button>
      </div>
    </div>
  );
}
