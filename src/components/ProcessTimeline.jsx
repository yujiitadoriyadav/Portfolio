import React from "react";
import { FaSearch, FaPencilRuler, FaKeyboard, FaRocket } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Research",
    description:
      "Collecting qualitative and quantitative data to generate insights and user pain points.",
    icon: <FaSearch size={28} />,
    bg: "bg-[#f3e6cf]", // beige
  },
  {
    id: 2,
    title: "Design",
    description:
      "Establishing Info Architecture, and Design Systems. Supported by Storyboarding User Flows, Rapid Prototyping, Wireframing and Testing.",
    icon: <FaPencilRuler size={28} />,
    bg: "bg-[#b5ddd5]", // teal
  },
  {
    id: 3,
    title: "Code",
    description:
      "Applying Agile practices to seamlessly bridge design and development, ensuring a smooth workflow from concept to code.",
    icon: <FaKeyboard size={28} />,
    bg: "bg-[#f4f4f4]", // light gray
  },
  {
    id: 4,
    title: "Launch",
    description:
      "All stakeholders approve of handed over designs to go live and reach its targeted users.",
    icon: <FaRocket size={28} />,
    bg: "bg-[#cfe7cf]", // green
  },
];

const ProcessTimeline = () => {
  return (
    <div className="w-full bg-gray-900 py-16 mt-40">
      <div className="flex flex-col items-center justify-center px-6 md:flex-row md:space-x-12">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center relative mb-12 md:mb-0"
          >
            {/* Circle with icon */}
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center ${step.bg} relative shadow-lg`}
            >
              {step.icon}
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
                {step.id}.
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-white">
              {step.title}
            </h3>
            {/* Description */}
            <p className="mt-2 max-w-xs text-sm text-gray-300">
              {step.description}
            </p>

            {/* Line connecting circles */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-14 left-full w-32 h-[2px] bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
