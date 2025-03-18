import React, { useState, useRef } from "react";

import TechList from "./tech-list";
import { SearchIcon } from "lucide-react";
import axios from "axios";
import useDebounce from "../../hooks/use-debounce";
import Spinner from "../spinner";

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
      setSearchQuery("");
    } catch (error) {
      console.error("Error fetching technologies:", error);
      //setTechnologies([]); // Clear results on error
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  React.useEffect(() => {
    fetchTechnologies();
  }, [debouncedSearchQuery]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <div className="technologies-components-here relative my-5">
      <h2 className="text-center text-2xl font-bold text-black">
        Technologies we used
      </h2>
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="flex items-center justify-center border-2 border-gray-300 rounded-md p-2 mb-2">
          <SearchIcon className="w-4 h-4 mr-2" />

          <input
            ref={ref}
            name="searchbox"
            placeholder="Search technology stack"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        {isLoading && <Spinner />}
        {!isLoading && technologies.length === 0 && (
          <p className="text-center text-gray-500">
            We don't have technologies that you looking for
          </p>
        )}
        {!isLoading && technologies.length > 0 && (
          <TechList items={technologies} />
        )}
      </div>
    </div>
  );
};

export default TechStacksComponent;
