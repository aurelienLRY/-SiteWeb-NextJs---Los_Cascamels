import React from "react";
import { ContactSection } from "@/components";

export { metadata } from "./metadata";

export default function Contact() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary py-8">
          Contact
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center gap-8">
        <div className="px-8  py-24 min-h-[60vh] flex flex-col justify-center items-center gap-8  w-full max-w-7xl mx-auto ">
          <h2 className="text-4xl md:text-6xl text-center ">Informations</h2>
          <p>
            Situé dans le village de Rieux-minervois, à 30 minutes de
            Carcassonne ,
          </p>
          <div className="flex flex-col xl:flex-row gap-6 py-8">
            <div className="flex flex-1 gap-4 font-bold">
              <h3 className="text-2xl -rotate-90 flex items-center  font-light text-primary">
                Contact
              </h3>
              <ul className="flex flex-col justify-center ">
                <li>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                    <span className="font-normal">Email:</span>{" "}
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}>
                    <span className="font-normal">Téléphone:</span>{" "}
                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <a href={`https://maps.app.goo.gl/ZkcgPybXmahyFJnx6`}>
                    <span className="font-normal">Adresse:</span>{" "}
                    {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 gap-4 font-bold">
              <h3 className="text-2xl -rotate-90 flex justify-center items-center  font-light text-primary">
                Horaires
              </h3>
              <ul className="flex flex-col ">
                <li>Lundi: 09:00 - 17:00</li>
                <li>Mardi: 09:00 - 17:00</li>
                <li>- - -</li>
                <li>Jeudi: 09:00 - 17:00</li>
                <li>Vendredi: 09:00 - 17:00</li>
              </ul>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.2582479593657!2d2.581835373421433!3d43.280827885396704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1dae807c5651b%3A0xd66a344079cc9853!2sCalandreta%20los%20cascamels!5e1!3m2!1sfr!2sfr!4v1740040467268!5m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
            className="w-full h-full min-h-[400px] max-h-[600px] rounded-3xl border-t-2 border-primary opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <ContactSection />
      </div>
    </React.Fragment>
  );
}
