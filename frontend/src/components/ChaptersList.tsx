"use client";

import { useState } from "react";

import NestedAccordionItem from "./accordion/NestedAccordionItem";
import ChapterContent from "./ChapterContent";

import { Chapter } from "@/types/chapter";

type ChaptersListProps = {
  itemsList: Chapter[];
  items: Chapter[];
};

const ChaptersList = ({ itemsList, items }: ChaptersListProps) => {
  const [currentActive, setCurrentActive] = useState(itemsList?.[0].id);
  const [currentActiveLevelOne, setCurrentActiveLevelOne] =
    useState(currentActive);
  const [currentActiveLevelTwo, setCurrentActiveLevelTwo] = useState("");

  const handleChangeActive = (activeItem: Chapter) => {
    const activeItemId = activeItem.id;
    if (currentActive === activeItemId) {
      setCurrentActive("");
    } else {
      if (activeItem.level === 2) {
        setCurrentActiveLevelTwo("");
        setCurrentActiveLevelOne(activeItem.parent_id);
      } else if (activeItem.level === 3) {
        setCurrentActiveLevelTwo(activeItem.parent_id);

        const findActiveParentLevelOne = items.find((p) =>
          p.children?.some((c) => c.id === activeItem.parent_id)
        );
        if (findActiveParentLevelOne) {
          setCurrentActiveLevelOne(findActiveParentLevelOne.id);
        }
      } else {
        setCurrentActiveLevelOne(activeItemId);
      }
      setCurrentActive(activeItemId);
    }
  };

  return (
    <div className="grid grid-cols-4 w-full h-full max-h-full">
      <div className="col-span-1">
        <div className="col-span-1 max-h-svh overflow-auto sticky top-0">
          {itemsList.map((item) => (
            <NestedAccordionItem
              key={`item_${item.id}`}
              accordion={item}
              setActiveAccordion={handleChangeActive}
              activeAccordion={currentActive}
              accordionOpen={currentActiveLevelOne === item.id}
              activeNestedAccordion={currentActiveLevelTwo}
            />
          ))}
        </div>
      </div>
      <div className="col-span-3 bg-slate-100 p-2">
        {/* 
          Backend data is correctly sorted in given example, 
          if that were not the case we would have to either 
          sort original array from API or have a method to flatten the newly created nested array
        */}
        {items.map((item) => (
          // Backend data seem to have duplicate IDs, so using name here to avoid duplicate key error
          <ChapterContent
            key={`content_${item.id}_${item.name}`}
            content={item.content}
            id={item.id}
            name={item.name}
            isActive={currentActive === item.id}
            onClick={() => handleChangeActive(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChaptersList;
