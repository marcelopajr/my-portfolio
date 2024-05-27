"use client";

import { Button } from "@/src/components/button";
import { TechBadge } from "@/src/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/marcelopajr",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://linkedin.com/in/marcelopajr",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/5585997881135",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Hello, my name is</p>
          <h2 className="text-4xl font-medium mt-2">Marcelo Almeida</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            I am a front-end developer passionate about technology. With over 4
            years of experience, my goal is to create beautiful and functional
            user interfaces, as well as lead technical teams in challenging
            projects. I am always open to new opportunities and challenges.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lag:max-w-[340px]">
            {Array.from({ length: 5 }).map((_index) => (
              <TechBadge name={"Next.js"} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Get in touch <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src={"/images/profile-pic.png"}
          alt="Profile pic of Marcelo Almeida"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
