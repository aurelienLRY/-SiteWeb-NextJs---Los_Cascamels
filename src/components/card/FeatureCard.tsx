import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon?: IconType;
  title: string;
  description: string;
  motif?: string;
  bgColor?: string;
  textColor?: string;
  iconSize?: number;
  items: "LEFT" | "RIGHT";
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  motif,
  items = "LEFT",
  bgColor = "bg-secondary",
  textColor = "text-white",
  iconSize = 20,
}: FeatureCardProps) => {
  const Illustration = () => {
    return (
      <div
        className={`
        ${bgColor} 
        ${textColor} 
        aspect-square 
        w-12 
        h-12 
        rounded-full 
        flex 
        items-center 
        justify-center 
        shrink-0
        shadow-md
      `}
      >
        {motif ? (
          <span className="text-3xl">{motif}</span>
        ) : Icon ? (
          <Icon size={iconSize} />
        ) : null}
      </div>
    );
  };

  return (
    <div className="flex flex-row gap-5 items-center justify-center max-w-[500px] shadow-md p-5 rounded-lg ">
      {items === "LEFT" && <Illustration />}
      <div className="flex flex-col flex-1">
        <h4 className="text-black font-title text-2xl">{title}</h4>
        <p className="text-gray-500 text-lg">{description}</p>
      </div>
      {items === "RIGHT" && <Illustration />}
    </div>
  );
};

export default FeatureCard;
