import { SectionTitle } from "@/src/components/section-title";
import { KnownTech } from "./known-tech";
import { TbBrandNextjs } from "react-icons/tb";

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="skills" title="Knowledge" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2020-10-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};
