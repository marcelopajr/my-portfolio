import { ReactNode } from "react";
import { getRelativeTimeString } from "@/src/utils/get-relative-time";

type KnownTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "en-US"
  ).replace(" ago", "");

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>

      <span>{relativeTime} of experience</span>
    </div>
  );
};
