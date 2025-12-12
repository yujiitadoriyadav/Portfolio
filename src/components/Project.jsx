import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl font-semibold">{title}</p>

          {/* Tags with icons */}
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-neutral-600">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200"
              >
                {tag.icon && <tag.icon className="w-4 h-4 text-blue-600" />}
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 text-black font-medium hover:underline"
        >
          Read More
          <img src="/Arrow.png" className="w-5" alt="arrow" />
        </button>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent h-[1px] w-full" />

      {/* Details Modal */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
