"use client";

import { useEffect, useState } from "react";

import AccordionTitle from "./AccordionTitle";

import { Chapter } from "@/types/chapter";

type ChapterItemProps = {
  accordion: Chapter;
  activeAccordion?: string;
  currentActiveLevelOne?: string;
  currentActiveLevelTwo?: string;
  setActiveAccordion: (item: Chapter) => void;
};

// Could be improved by using generic types to avoid using Chapter typing here
const NestedAccordionItem = ({
  accordion,
  setActiveAccordion,
  activeAccordion,
  currentActiveLevelOne,
  currentActiveLevelTwo,
}: ChapterItemProps) => {
  const hasAccordions = accordion.children && accordion.children.length > 0;
  const active =
    activeAccordion === accordion.id ||
    currentActiveLevelOne === accordion.id ||
    currentActiveLevelTwo === accordion.id;

  const [isActive, setIsActive] = useState(active);
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    setIsOpen(active);
  }, [active]);

  // is Child active open accordion
  if (accordion.children && accordion.children.length > 0) {
    const findActiveChild = accordion.children.find(
      (c) => c.id === activeAccordion
    );
    if (findActiveChild && !isOpen) {
      setIsOpen(true);
    }
  }

  const handleChange = (item: Chapter, setOpen = false) => {
    setIsActive(!isActive);
    if (setOpen) setIsOpen(!isOpen);

    setActiveAccordion(item);

    const currentElement = document.getElementById(item.id);
    currentElement?.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (!hasAccordions) {
    return (
      <AccordionTitle
        label={accordion.name}
        hasChildren={false}
        active={
          currentActiveLevelOne === accordion.id ||
          activeAccordion === accordion.id
        }
        handleChange={() => handleChange(accordion)}
      />
    );
  }

  return (
    <div>
      <h2>
        <AccordionTitle
          label={accordion.name}
          active={currentActiveLevelOne === accordion.id}
          handleChange={() => handleChange(accordion, true)}
        />
      </h2>
      <div className={isOpen ? "" : "hidden"}>
        <div className="p-2">
          {accordion.children &&
            accordion.children.length > 0 &&
            accordion.children.map((nestedAccordion) => (
              <AccordionTitle
                // Backend data seem to have duplicate IDs, so using name here to avoid duplicate key error
                key={`nested_accordion_${nestedAccordion.id}_${nestedAccordion.name}`}
                label={nestedAccordion.name}
                hasChildren={false}
                active={
                  nestedAccordion.id === activeAccordion ||
                  nestedAccordion.id === currentActiveLevelTwo
                }
                handleChange={() => handleChange(nestedAccordion)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NestedAccordionItem;
