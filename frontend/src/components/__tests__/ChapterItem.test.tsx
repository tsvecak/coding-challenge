import { fireEvent, render, screen } from "@testing-library/react";

import { chapters } from "@/lib/mocks/chapters";

import NestedAccordionItem from "@/components/accordion/NestedAccordionItem";

describe("ChapterItem", () => {
  it("Renders chapter name", () => {
    const chapter = chapters.data.content.document[0];
    const setActiveAccordion = () => jest.fn();
    render(
      <NestedAccordionItem
        key={`item_${chapter.id}`}
        accordion={chapter}
        setActiveAccordion={setActiveAccordion}
      />
    );

    const chapterName = screen.getByText(chapter.name);
    expect(chapterName).toBeInTheDocument();
  });

  it("Triggers function on click", () => {
    const chapter = chapters.data.content.document[0];
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <NestedAccordionItem
        key={`item_${chapter.id}`}
        accordion={chapter}
        setActiveAccordion={mockOnClick}
      />
    );
    const clickIndicator = getByTestId("accordion-title");
    fireEvent.click(clickIndicator);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
