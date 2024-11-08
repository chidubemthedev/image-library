"use client";
import Header from "@/components/Header";
import ImageLibrary from "@/components/ImageLibrary";
import { useEffect, useState } from "react";

const LIBRARY = [
  { title: "Spaghetti bolognesesunn", image: "https://picsum.photos/100" },
  { title: "Pasta carbonara", image: "https://picsum.photos/200" },
  { title: "Spaghetti carbonara", image: "https://picsum.photos/300" },
  { title: "Macaroni carbonara", image: "https://picsum.photos/400" },
  { title: "Medium Steak", image: "https://picsum.photos/500" },
  { title: "Cream Salad", image: "https://picsum.photos/600" },
  { title: "Spaghetti bolognese", image: "https://picsum.photos/100" },
  { title: "Pasta carbonara", image: "https://picsum.photos/200" },
  { title: "Spaghetti carbonara", image: "https://picsum.photos/300" },
  { title: "Macaroni carbonara", image: "https://picsum.photos/400" },
  { title: "Medium Steak", image: "https://picsum.photos/500" },
  { title: "Cream Salad", image: "https://picsum.photos/600" },
  { title: "Spaghetti bolognese", image: "https://picsum.photos/100" },
  { title: "Pasta carbonara", image: "https://picsum.photos/200" },
  { title: "Spaghetti carbonara", image: "https://picsum.photos/300" },
  { title: "Macaroni carbonara", image: "https://picsum.photos/400" },
  { title: "Medium Steak", image: "https://picsum.photos/500" },
  { title: "Cream Salad", image: "https://picsum.photos/600" },
  { title: "Spaghetti bolognese", image: "https://picsum.photos/100" },
  { title: "Pasta carbonara", image: "https://picsum.photos/200" },
  { title: "Spaghetti carbonara", image: "https://picsum.photos/300" },
  { title: "Macaroni carbonara", image: "https://picsum.photos/400" },
  { title: "Medium Steak", image: "https://picsum.photos/500" },
  { title: "Cream Salad", image: "https://picsum.photos/600" },
  { title: "Spaghetti bolognese", image: "https://picsum.photos/100" },
  { title: "Pasta carbonara", image: "https://picsum.photos/200" },
  { title: "Spaghetti carbonara", image: "https://picsum.photos/300" },
  { title: "Macaroni carbonara", image: "https://picsum.photos/400" },
  { title: "Medium Steak", image: "https://picsum.photos/500" },
  { title: "Cream Salad", image: "https://picsum.photos/600" },
];

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [filteredLirary, setFilteredLibrary] = useState(LIBRARY);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredLibrary(
      LIBRARY.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  console.log(filteredLirary);

  return (
    <div className="p-[32px]">
      <Header search={search} handleSearch={handleSearch} />
      <ImageLibrary library={filteredLirary} />
    </div>
  );
}
