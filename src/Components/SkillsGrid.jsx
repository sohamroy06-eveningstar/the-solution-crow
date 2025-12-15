import { skillCategories } from "@/data/constants";

export default function SkillsGrid() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map(cat => (
          <div key={cat.title} className="bg-[#111] p-6 rounded-xl">
            <h3 className="font-semibold mb-4">{cat.title}</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              {cat.skills.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
