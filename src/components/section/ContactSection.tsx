"use client";

import { Section } from "@/components";
import { useForm } from "react-hook-form";
import { Input, Textarea, Button } from "@nextui-org/react";
import { FaRegPaperPlane } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import Image from "next/image";

interface IFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection = ({ className }: { className?: string }) => {
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  const onSubmit = async (data: IFormInputs) => {
    if (!isVerified) {
      alert("Veuillez valider le captcha");
      return;
    }
    // TODO: Implémenter l'envoi du formulaire
    console.log(data);
    reset();
    // Réinitialiser le captcha
    recaptchaRef.current?.reset();
    setIsVerified(false);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setIsVerified(!!token);
  };

  return (
    <Section
      className={`min-h-[60vh] flex flex-col justify-center items-center gap-8 py-10 w-full px-2 ${className}`}
      id="contact"
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-2 items-center text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-title text-center ">
          Contactez-nous
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Vous avez une question ? N&apos;hésitez pas à nous contacter !
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-8 justify-around items-center w-full">
        <div className="flex justify-center items-center flex-1">
          <Image src="/img/Kids4.webp" alt="Contact" width={500} height={500} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 flex-1 justify-center items-center"
        >
          <Input
            {...register("name", { required: "Le nom est requis" })}
            label="Nom"
            variant="bordered"
            color={errors.name ? "danger" : "default"}
            errorMessage={errors.name?.message}
            className="w-full bg-white"
          />

          <Input
            {...register("email", {
              required: "L&apos;email est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide",
              },
            })}
            label="Email"
            type="email"
            variant="bordered"
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email?.message}
            className="w-full bg-white"
          />

          <Input
            {...register("subject", { required: "Le sujet est requis" })}
            label="Sujet"
            variant="bordered"
            color={errors.subject ? "danger" : "default"}
            errorMessage={errors.subject?.message}
            className="w-full bg-white"
          />

          <Textarea
            {...register("message", {
              required: "Le message est requis",
              minLength: {
                value: 10,
                message: "Le message doit contenir au moins 10 caractères",
              },
            })}
            label="Message"
            variant="bordered"
            color={errors.message ? "danger" : "default"}
            errorMessage={errors.message?.message}
            className="w-full bg-white"
            minRows={4}
          />

          <div className="flex flex-col items-center gap-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={handleRecaptchaChange}
            />

            <Button
              type="submit"
              color="primary"
              endContent={<FaRegPaperPlane />}
              size="lg"
              isDisabled={!isVerified}
            >
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};
