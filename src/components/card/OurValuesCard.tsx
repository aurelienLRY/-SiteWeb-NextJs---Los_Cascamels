import React from "react";
import { IconType } from "react-icons";

interface OurValuesCardProps {
  icon?: IconType;
  title: string;
  description: string;
  motif?: string;
  bgColor?: string;
  textColor?: string;
  iconSize?: number;
  items?: "LEFT" | "RIGHT";
  className?: string;
}

export const OurValuesCard = ({
  icon: Icon,
  title,
  description,
  motif,
  items = "LEFT",
  bgColor = "bg-secondary",
  textColor = "text-white",
  iconSize = 20,
  className,
}: OurValuesCardProps) => {
  const Illustration = () => {
    return (
      <div
        className={`
        ${bgColor}  
        ${textColor} 
        aspect-square  
        rounded-full 
        flex 
        items-center 
        justify-center 
        shrink-0
        ${className}
      `}
      >
        {motif ? (
          <span className="text-3xl">{motif}</span>
        ) : Icon ? (
          <Icon size={iconSize} className="p-2" />
        ) : null}
      </div>
    );
  };

  return (
    <div
      className={`flex  md:flex-row gap-5 items-center justify-center max-w-[500px]  p-5 rounded-lg ${
        items === "LEFT"
          ? "flex-col text-center md:text-start"
          : "flex-col-reverse text-center md:text-end"
      }`}
    >
      {items === "LEFT" && <Illustration />}
      <div className="flex flex-col flex-1">
        <h4 className="text-black font-title text-2xl">{title}</h4>
        <p className="text-gray-500 ">{description}</p>
      </div>
      {items === "RIGHT" && <Illustration />}
    </div>
  );
};
