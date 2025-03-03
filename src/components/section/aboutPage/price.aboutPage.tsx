import { Section } from "@/components";
import { FaCheck } from "react-icons/fa";

export const PriceAboutPage = ({ className }: { className?: string }) => {
  return (
    <Section
      className={`flex flex-col gap-8 justify-center items-center min-h-[60vh] max-w-6xl mx-auto ${className}`}
    >
      <div className="flex flex-col ">
        <h2 className="text-2xl text-primary font-subtitle">
          Un petit prix pour un enseignement de qualité
        </h2>
        <h3 className="text-4xl md:text-6xl font-title">
          Une école accessible à tous grâce à notre modèle associatif
        </h3>
      </div>

      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="flex flex-col gap-4 bg-pink text-white p-6 rounded-lg max-w-xl">
          <h4 className="text-2xl font-title ">Frais d’inscription</h4>
          <div>
            <h5 className="text-4xl font-title ">
              <span className=" text-primary">750 €</span>/ans
            </h5>
            <h6 className="text-2xl font-title ">pour votre premier enfant</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="py-2">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une garderie
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une cantine
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une réduction de 25% sur le prix de l&apos;inscription
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-red text-white p-6 rounded-lg max-w-xl">
          <h4 className="text-2xl font-title ">Frais d’inscription</h4>
          <div>
            <h5 className="text-4xl font-title ">
              <span className=" text-primary">750 €</span>/ans
            </h5>
            <h6 className="text-2xl font-title ">pour votre premier enfant</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="py-2">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une garderie
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une cantine
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une réduction de 25% sur le prix de l&apos;inscription
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-purple text-white p-6 rounded-lg max-w-xl">
          <h4 className="text-2xl font-title ">Frais d’inscription</h4>
          <div>
            <h5 className="text-4xl font-title ">
              <span className=" text-primary">750 €</span>/ans
            </h5>
            <h6 className="text-2xl font-title ">pour votre premier enfant</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="py-2">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une garderie
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une cantine
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                Comprend une réduction de 25% sur le prix de l&apos;inscription
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
