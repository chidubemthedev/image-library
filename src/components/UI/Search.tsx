"use client";

import { SearchIcon } from "../Icons";

type Props = {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ search, handleSearch }: Props) => {
  return (
    <div className="flex px-3 space-x-2 h-[44px] border-[#E0E0E0] w-full border rounded-[4px] items-center bg-white">
      <span>
        <SearchIcon />
      </span>
      <input
        type="text"
        className="bg-inherit w-full border-none outline-none placeholder:text-placeholder"
        placeholder="Search Images"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
