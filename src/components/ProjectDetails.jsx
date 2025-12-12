import { motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm bg-black/30">
      <motion.div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto border shadow-lg rounded-2xl bg-white border-neutral-200 hide-scrollbar"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-full top-4 right-4 bg-white hover:bg-neutral-200 transition shadow"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Project Image */}
        <img src={image} alt={title} className="w-full " />

        {/* Content */}
        <div className="p-6">
          <h5 className="mb-3 text-2xl font-bold text-neutral-900">{title}</h5>
          <p className="mb-3 text-neutral-700">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-neutral-700">
              {subDesc}
            </p>
          ))}

          {/* Tags + Link */}
          <div className="flex items-center justify-between mt-5">
            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) =>
                tag.icon ? (
                  <tag.icon
                    key={tag.id}
                    className="w-8 h-8 text-blue-600 hover:scale-110 transition"
                  />
                ) : (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg w-10 h-10 hover:scale-110 transition"
                  />
                )
              )}
            </div>

            {/* External Link */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
