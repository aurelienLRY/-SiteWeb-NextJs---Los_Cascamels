import Image from "next/image";
import { EducationalProject } from "@/data/EducationalProject.data";

export const EducationProjectCard = ({
  title,
  description,
  image,
  className,
}: EducationalProject & { className?: string }) => {
  return (
    <div
      className={`relative w-full h-full box-content  max-w-[600px] flex flex-col justify-center items-center  `}
    >
      <div className="relative w-full bg-black bg-opacity-50  aspect-video rounded-lg ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div
        className={`h-full w-[90%] rounded-md py-6 px-4 flex flex-col -translate-y-14 shadow-lg border-t-3 border-white  gap-2 ${className}`}
      >
        <h3 className="text-4xl text-white text-center text-balance">
          {title}
        </h3>
        <div className="text-sm text-white  w-[90%] mx-auto min-w-[250px] ">
          {description.map((desc, index) => (
            <p key={index} className="mb-1">{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
