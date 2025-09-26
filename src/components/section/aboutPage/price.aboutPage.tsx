import { Section } from "@/components";
import { FaCheck } from "react-icons/fa";

export const PriceAboutPage = ({ className }: { className?: string }) => {
  return (
    <Section
      className={`flex flex-col gap-8 justify-center items-center min-h-[60vh] max-w-6xl mx-auto ${className}`}
    >
      <div className="flex flex-col text-center  lg:text-start ">
        <h2 className="text-2xl text-primary font-subtitle">
          Un petit prix pour un enseignement de qualité
        </h2>
        <h3 className="text-4xl md:text-6xl font-title">
          Une école accessible à tous grâce à notre modèle associatif
        </h3>
      </div>

      <div className="flex  flex-col gap-4 lg:flex-row ">
        <div className="flex flex-1 flex-col gap-4 bg-pink text-white p-6 rounded-lg max-w-xl shadow-lg">
          <h4 className="text-2xl font-title text-center ">1 enfant</h4>
          <div>

            <h5 className="!text-5xl font-title text-center "><span className="text-primary">935€</span>/an
          </h5>
          </div>
          
          <div className="">
            <ul className="flex flex-col gap-1">
              <li className="flex items-center">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                70€/mois d&apos;adhésion
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                20€/ans frais pédagogique
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                75€/an cotisation fédération Calandreta
              </li>
            </ul>
          </div>
       
        </div>
        <div className="flex flex-1 flex-col gap-4 bg-red text-white p-6 rounded-lg max-w-xl shadow-lg">
          <h4 className="text-2xl font-title text-center ">2 enfants</h4>
          <div>
            <h5 className="!text-5xl font-title text-center ">
              <span className=" text-primary">1510 €</span>/ans
            </h5>
          </div>
        
          <div className="">
            <ul className="flex flex-col gap-1">
              <li className="flex items-center">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                110€/mois d&apos;adhésion
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                40€/ans frais pédagogique
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                150€/an cotisation fédération Calandreta
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 bg-purple text-white p-6 rounded-lg max-w-xl shadow-lg">
          <h4 className="text-2xl font-title text-center ">3 enfants</h4>
          <div>
            <h5 className="!text-5xl font-title text-center ">
              <span className=" text-primary">1965 €</span>/ans
            </h5>
          </div>
      
          <div className="py-2">
            <ul className="flex flex-col gap-1">
              <li className="flex items-center">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                140€/mois d&apos;adhésion
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                60€/ans frais pédagogique
              </li>
              <li className="flex items-center ">
                <span className="text-primary text-xl mr-2">
                  <FaCheck />
                </span>
                225€/an cotisation fédération Calandreta
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
