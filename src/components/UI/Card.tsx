"use client";

import { useEffect, useRef, useState } from "react";
import { MoreOptionsIcon } from "../Icons";

type Props = {
  title: string;
  image: string;
};

const Card = ({ title, image }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="relative">
      <div>
        <div className="sm:w-[115px] sm:h-[115px] rounded-[8px] overflow-hidden border border-[#E0E0E0]">
          <img
            src={image}
            alt="image"
            className="w-full h-full flex-1 hover:scale-110 transition-all duration-300"
          />
        </div>
        <p className="whitespace-nowrap overflow-hidden text-ellipsis sm:w-[115px] text-[#B1B1B1] text-[12px] font-[400] tracking-[0.24px]">
          {title}
        </p>
      </div>

      <div
        className="rounded-[2px] bg-white absolute top-[8px] right-[4px] z-50"
        ref={dropdownRef}
      >
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="hover:cursor-pointer h-fit"
        >
          <MoreOptionsIcon />
        </div>
        {showDropdown && (
          <div className="absolute right-[-25px] top-[20px] rounded-[4px] overflow-hidden z-30 bg-white shadow-cardDropdownShadow">
            <ul className="m-[12px]">
              <li className="flex items-center hover:cursor-pointer w-[148px] h-[44px]">
                Download image
              </li>
              <li className="flex items-center hover:cursor-pointer text-[#F01C1C] w-[148px] h-[44px]">
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
