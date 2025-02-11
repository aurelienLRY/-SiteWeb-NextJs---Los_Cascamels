"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  ReactNode,
  useMemo,
  TouchEvent,
} from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

interface CarouselProps {
  children: ReactNode;
  showDots?: boolean;
  showArrows?: boolean;
  visibleItems?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

interface CarouselItemProps {
  children: ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <>{children}</>;
};

export const Carousel: React.FC<CarouselProps> = ({
  children,
  showDots = true,
  showArrows = true,
  visibleItems = 1,
  autoPlay = false,
  autoPlayInterval = 3000,
  className,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const effectiveVisibleItems = isMobile ? 1 : visibleItems;
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const itemWidth = useMemo(
    () => 100 / effectiveVisibleItems,
    [effectiveVisibleItems]
  );
  const maxIndex = useMemo(
    () => Math.max(0, items.length - effectiveVisibleItems),
    [items.length, effectiveVisibleItems]
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, nextSlide]);

  const carouselStyles = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * itemWidth}%)`,
    }),
    [currentIndex, itemWidth]
  );

  return (
    <div className={`w-full relative ${className || ""}`}>
      <div className="w-full flex items-center justify-between">
        {showArrows && !isMobile && (
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ←
          </button>
        )}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={carouselStyles}
          >
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${itemWidth}%` }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        {showArrows && !isMobile && (
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>
        )}
      </div>
      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                currentIndex === index ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
