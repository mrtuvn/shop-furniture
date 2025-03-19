import React, { useState, useRef } from "react";

import TechList from "./tech-list";
import { SearchIcon, TagIcon } from "lucide-react";
import axios from "axios";
import useDebounce from "../../hooks/use-debounce";
import Spinner from "../spinner";
import TagList from "./tag-list";

export interface Technology {
  title: string;
  url: string;
  description: string;
  image: string;
  category: string;
}

const API_URL = "https://frontend-test-api.digitalcreative.cn/";

const TechStacksComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTag, setActiveTag] = useState<string>("");

  // trigger event after 1 second user not typing
  const debouncedSearchQuery = useDebounce(searchQuery, 1300);

  const fetchTechnologies = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get<Technology[]>(
        `${API_URL}?no-throttling=true&search=${encodeURIComponent(
          debouncedSearchQuery
        )}`
      );
      setTechnologies(response.data);
      //setSearchQuery("");
    } catch (error) {
      console.error("Error fetching technologies:", error);
      setTechnologies([]); // Clear results on error
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  React.useEffect(() => {
    fetchTechnologies();
  }, [debouncedSearchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  };

  const displayedTechnologies = activeTag
    ? technologies.filter((tech) => tech.category === activeTag)
    : technologies;

  return (
    <div className="isolate technologies-components-here flex flex-col relative my-5 md:max-w-[690px] mx-auto shadow-[0px_50px_60px_-30px_hsla(0, 0%, 0%, 0.25)]">
      <div className="bg-[#fff] w-full flex items-center justify-center flex-col space-y-4 rounded-t-[20px] p-[24px]">
        <div className="w-full flex items-center justify-center border-2 border-[#f2f4f8] text-black rounded-[12px] p-[24px] focus:outline-[#6833ff]">
          <SearchIcon className="w-4 h-4 mr-2" />

          <input
            ref={ref}
            className="w-full"
            name="searchbox "
            placeholder="Search technology stack"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="flex items-center justify-center tags-filter-by-category">
          <TagList activeTag={activeTag} handleTagClick={handleTagClick} />
        </div>

        {isLoading && <Spinner />}
        {(!isLoading && displayedTechnologies.length === 0) ||
          (!displayedTechnologies && (
            <p className="text-center py-3 text-gray-500">
              We don't have technologies that you looking for
            </p>
          ))}
        {!isLoading && displayedTechnologies.length > 0 && (
          <TechList items={displayedTechnologies} />
        )}
      </div>
      <div className="bg-[#fff] flex status-results border-t border-[#f2f4f8] rounded-b-[24px] rounded-b-[20px] py-[15px] px-[24px]">
        {!isLoading && displayedTechnologies.length > 0 && (
          <div className="text-left text-[hsla(220, 9%, 63%, 1)] text-gray-500">
            Results: {displayedTechnologies.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStacksComponent;
