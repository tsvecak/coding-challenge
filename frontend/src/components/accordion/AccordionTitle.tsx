const AccordionTitle = ({
  label,
  hasChildren = true,
  active = false,
  handleChange,
}: {
  label: string;
  hasChildren?: boolean;
  active?: boolean;
  handleChange: () => void;
}) => (
  <button
    className={`flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 gap-3 border-b-2 ${
      active ? " bg-slate-500 text-white" : ""
    }`}
    onClick={() => handleChange()}
    data-testid="accordion-title"
  >
    <span>{label}</span>
    {hasChildren && (
      <svg
        data-accordion-icon
        className={`w-3 h-3  shrink-0 ${active ? "rotate-180" : "rotate-90"}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    )}
  </button>
);

export default AccordionTitle;
