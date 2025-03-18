import React from "react";
import { Technology } from "./tech-stacks-comp";
const TechItem = ({ item }: { item: Technology }) => {
  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="flex items-center gap-2 justify-start bg-gray-200 rounded-md p-2 space-y-2 ">
        <img src={item.image} alt="stack" width={80} height={50} />
        <div>
          <h5 className="text-sm font-bold text-black">{item.title}</h5>
          <p>{item.description}</p>
          <p className="text-xs text-gray-500">{item.category}</p>
        </div>
      </div>
    </a>
  );
};

export default TechItem;
