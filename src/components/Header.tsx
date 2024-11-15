"use client";

import { useEffect, useRef, useState } from "react";
import { DropdownIcon } from "./Icons";
import Search from "./UI/Search";

type Props = {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ search, handleSearch }: Props) => {
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
    <div>
      <h1 className="text-[#1E1E1E] sodo-sans text-[20px] font-[700] tracking-[0.8px]">
        Image library
      </h1>
      <p className="mt-[8px] max-w-[480px]">
        Manage all your item images. To upload, drag and drop images onto this
        page or upload directly from your device.
      </p>

      <div className="flex md:flex-row flex-col-reverse  md:justify-between mt-[20px] md:mt-[32px]">
        <div className="flex flex-col-reverse md:flex-row gap-[20px] md:gap-[12px] items-center space-y-[20px] md:space-y-0">
          <div
            ref={dropdownRef}
            className="relative flex justify-between px-3 space-x-2 h-[44px] border-[#E0E0E0] w-full border rounded-[4px] items-center bg-[#F2F2F2]"
          >
            Sort By: Date Uploaded{" "}
            <span
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:cursor-pointer"
            >
              <DropdownIcon />
            </span>
            {showDropdown && (
              <div className="absolute right-0 md:right-[-40px] top-[60px] rounded-[8px] shadow-[0_0_12px_0_#EEEEEE] overflow-hidden z-30 bg-white">
                <ul className="min-w-max w-[260px] m-2 space-y-1">
                  <li className="p-[16px] flex items-center justify-between">
                    <p className="text-[12px] text-[#1E1E1E]">
                      Alphabetical A-Z
                    </p>
                    <input
                      type="checkbox"
                      name="alphabetical"
                      id=""
                      className="custom-checkbox"
                    />
                  </li>
                  <li className="p-[16px] flex items-center justify-between">
                    <p className="text-[12px] text-[#1E1E1E]">Date uploaded </p>
                    <input
                      type="checkbox"
                      name="time"
                      id=""
                      className="custom-checkbox"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Search search={search} handleSearch={handleSearch} />
        </div>

        <button
          onClick={() => {
            // Logic to handle image upload
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = (event) => {
              const file = (event.target as HTMLInputElement).files?.[0];
              if (file) {
                // Handle the file upload
                console.log("Uploading:", file);
              }
            };
            input.click();
          }}
          className="w-fit rounded-[4px] bg-[#2B50D6] text-white px-[12px] py-[10px] hover:scale-110 transition-all duration-300"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Header;
