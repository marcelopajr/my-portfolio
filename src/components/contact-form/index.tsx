"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SectionTitle } from "../section-title";
import { Button } from "../button";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("An error occurred in form submission. Try again!");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contact"
          title="Shall we work together? Get in touch"
          className="items-center text-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Name"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-500 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-500 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("email")}
          />
          <textarea
            placeholder="Message"
            maxLength={500}
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-500 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register("message")}
          />

          <Button
            className="w-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Send message <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
