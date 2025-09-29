"use client";
import Image from "next/image";
import { EducationalProject } from "@/data/EducationalProject.data";
import { useState, useRef, useEffect } from "react";

interface EducationProjectCardProps extends EducationalProject {
  className?: string;
  maxLines?: number;
}

export const EducationProjectCard = ({
  title,
  description,
  image,
  className,
  maxLines = 5,
}: EducationProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Vérifier si le texte dépasse le nombre de lignes maximum
  useEffect(() => {
    const checkTextOverflow = () => {
      if (textRef.current) {
        const element = textRef.current;
        const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * maxLines;
        const actualHeight = element.scrollHeight;
        
        setIsTextOverflowing(actualHeight > maxHeight);
      }
    };

    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);
    
    return () => window.removeEventListener('resize', checkTextOverflow);
  }, [maxLines, description]);

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
        className={`h-full w-[90%] rounded-md py-6 px-4 flex flex-col  -translate-y-14 shadow-lg border-t-3 border-white  gap-2 ${className}`}
      >
        <h3 className="text-4xl text-white text-center text-balance">
          {title}
        </h3>
        <div className="text-sm text-white w-[90%] mx-auto min-w-[250px]">
          <div 
            ref={textRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded || !isTextOverflowing 
                ? 'max-h-none opacity-100' 
                : `line-clamp-${maxLines} opacity-90`
            }`}
            style={{
              maxHeight: isExpanded || !isTextOverflowing 
                ? 'none' 
                : `${maxLines * 1.5}em`
            }}
          >
            <div className={`transition-all duration-500 ease-in-out ${
              isExpanded ? 'transform translate-y-0' : 'transform translate-y-0'
            }`}>
              {description.map((desc, index) => (
                <p 
                  key={index} 
                  className={`mb-1 transition-all duration-300 ease-in-out ${
                    isExpanded 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-100 transform translate-y-0'
                  }`}
                  style={{
                    animationDelay: isExpanded ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
          
          {/* Bouton chevron pour basculer - affiché seulement si le texte déborde */}
          {isTextOverflowing && (
            <div className={`transition-all duration-300 ease-in-out ${
              isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-100 transform translate-y-0'
            }`}>
              <button
                onClick={toggleExpanded}
                className="mt-3 flex items-center justify-center w-full text-white hover:text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md py-2 hover:bg-white hover:bg-opacity-10 transform hover:scale-105"
                aria-label={isExpanded ? "Réduire la description" : "Voir plus de détails"}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">
                    {isExpanded ? "Voir moins" : "Voir plus"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-all duration-500 ease-in-out transform ${
                      isExpanded ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
