import Image from "next/image";

export interface DonorCardProps {
  description: string;
  urlImage?: string;
  name?: string;
}

export const DonorCard = ({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  urlImage = "/img/avatar-96.png",
  name = "Nom du donateur",
}: DonorCardProps) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="p-4 bg-cream rounded-lg shadow border border-primary w-[350px] min-h-[180px] relative py-10">
        <p className=" text-center font-sans text-base ">
          &quot; {description} &quot;
        </p>
        {urlImage && (
          <Image
            src={urlImage}
            alt="Photo ou logo du donateur"
            width={60}
            height={60}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 rounded-full border-2 border-primary overflow-hidden bg-white"
          />
        )}
      </div>
      {name && <p className="text-white font-title text-lg">{name}</p>}
    </div>
  );
};
