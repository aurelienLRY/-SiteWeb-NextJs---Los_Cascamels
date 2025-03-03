"use client";
import { Section } from "@/components";
import faqData from "@/data/faq.data.json";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  return (
    <Section className="min-h-screen bg-bleuRoyale py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-title text-primary mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Découvrez les réponses aux questions les plus courantes sur notre
            école Calandreta Los Cascamèls
          </p>
        </div>

        <div className="max-w-7xl  space-y-12 ">
          {faqData.themes.map((theme) => (
            <div key={theme.id} className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: theme.id * 0.1 }}
                className="text-2xl md:text-4xl font-subtitle text-white mb-6"
              >
                {theme.title}
              </motion.h2>
              {theme.items.map((item) => (
                <FAQItem key={item.id} {...item} themeId={theme.id} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

interface FAQItemProps {
  question: string;
  response: string[];
  id: number;
  themeId: number;
}

function FAQItem({ question, response, id, themeId }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: themeId * 0.1 + id * 0.05 }}
      className="bg-darkBlue rounded-lg overflow-hidden border border-primary"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-opacity-90 transition-all duration-200"
      >
        <h3 className="text-xl font-subtitle text-primary pr-8">{question}</h3>
        <span className="text-primary flex-shrink-0">
          {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            {response.map((paragraph, index) => (
              <p key={index} className="text-white mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
