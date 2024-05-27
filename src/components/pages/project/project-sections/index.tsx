import Image from "next/image";

const sections = [
  {
    title: "Login",
    image: "https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA",
  },
  {
    title: "Home",
    image: "https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA",
  },
];

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map(({ title, image }) => (
        <div key={title} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {title}
          </h2>
          <Image
            width={1080}
            height={672}
            src={image}
            alt={`${title} Session Image`}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};
