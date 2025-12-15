import { experiences } from "@/data/constants";

export default function ExperienceTimeline() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6 border-l border-gray-700 pl-6">
        {experiences.map(exp => (
          <div key={exp.company}>
            <h3 className="font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-400">{exp.company} • {exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
