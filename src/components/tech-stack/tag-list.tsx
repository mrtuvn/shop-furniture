import { TagIcon } from "lucide-react";
import React from "react";

const TagList = ({
  handleTagClick,
  activeTag,
}: {
  handleTagClick: (tag: string) => void;
  activeTag: string;
}) => {
  return (
    <ul className="flex gap-[16px]">
      <li>
        <button
          onClick={() => handleTagClick("languages")}
          className={`${
            activeTag === "languages"
              ? "bg-[#6833ff] text-white"
              : "bg-[#F2F4F8] text-[#6833ff]"
          } hover:bg-[#6833ff] cursor-pointer hover:text-white px-4 py-2 rounded-full flex items-center`}
        >
          <TagIcon className="w-4 h-4 mr-2" />
          Languages
        </button>
      </li>
      <li>
        <button
          onClick={() => handleTagClick("build")}
          className={`${
            activeTag === "build"
              ? "bg-[#6833ff] text-white"
              : "bg-[#F2F4F8] text-[#6833ff]"
          } hover:bg-[#6833ff] cursor-pointer hover:text-white  px-4 py-2 rounded-full flex items-center`}
        >
          <TagIcon className="w-4 h-4 mr-2" />
          Build
        </button>
      </li>
      <li>
        <button
          onClick={() => handleTagClick("design")}
          className={`${
            activeTag === "design"
              ? "bg-[#6833ff] text-white"
              : "bg-[#F2F4F8] text-[#6833ff]"
          } hover:bg-[#6833ff] cursor-pointer hover:text-white px-4 py-2 rounded-full flex items-center`}
        >
          <TagIcon className="w-4 h-4 mr-2" />
          Design
        </button>
      </li>
      <li>
        <button
          onClick={() => handleTagClick("cloud")}
          className={`${
            activeTag === "cloud"
              ? "bg-[#6833ff] text-white"
              : "bg-[#F2F4F8] text-[#6833ff]"
          } hover:bg-[#6833ff] cursor-pointer hover:text-white px-4 py-2 rounded-full flex items-center`}
        >
          <TagIcon className="w-4 h-4 mr-2" />
          Cloud
        </button>
      </li>
    </ul>
  );
};

export default TagList;
