import React from "react";
import TechItem from "./tech-item";

const TechList = ({ items }: { items: any[] }) => {
  return (
    <div className="flex gap-2 flex-col">
      {items?.map((item: any) => (
        <TechItem item={item} />
      ))}
    </div>
  );
};

export default TechList;
