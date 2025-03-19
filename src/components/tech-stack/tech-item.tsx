import React from "react";
import { Technology } from "./tech-stacks-comp";
const TechItem = ({ item }: { item: Technology }) => {
  return (
    <a href={item.url} className="w-full" target="_blank" rel="noreferrer">
      <div className="flex items-center gap-[20px] justify-start hover:bg-[#f2f4f8] rounded-[12px] p-[12px] ">
        <img src={item.image} alt="stack" width={76} height={76} />
        <div>
          <h5 className="text-md font-bold text-black mb-4">{item.title}</h5>
          <p className="text-sm ">{item.description}</p>
        </div>
      </div>
    </a>
  );
};

export default TechItem;
