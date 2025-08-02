import { useEffect, useRef, useState } from "react";
import type { Department, Function, Location } from "../types/types";

interface DropdownMenuProps {
  data: Function[] | Department[] | Location[];
  dropdownText: string;
  selected?: string | null;
  onSelect?: (value: string) => void;
}

const DropdownMenu = ({
  data,
  dropdownText,
  selected,
  onSelect,
}: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onSelect?.(value);
    setOpen(false);
  };

  return (
    <div className="relative inline-block w-full md:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none"
        type="button"
      >
        <svg
          className="-ml-1 mr-1.5 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
        {selected ? `${dropdownText}: ${selected}` : dropdownText}
      </button>
      {open && (
        <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded shadow w-44">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 max-h-60 overflow-y-auto">
            {data.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSelect(item.title)}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 focus:outline-none"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
