import { KnownTech as IKnownTech } from "@/src/@types/projects";
import { SectionTitle } from "@/src/components/section-title";
import { KnownTech } from "./known-tech";

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="skills" title="Knowledge" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
