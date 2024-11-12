"use client";
import Header from "@/components/Header";
import ImageLibrary from "@/components/ImageLibrary";
import ImageModal from "@/components/UI/ImageModal";
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
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    image: string;
  } | null>(null);

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
      <ImageLibrary library={filteredLirary} onImageClick={setSelectedImage} />

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        <div className="">
          <h1 className="mt-[8px] mb-[32px]">Edit image</h1>
          <div className="flex flex-col gap-[16px]">
            <div className="flex rounded-[4px] border border-[#E6E6E6] h-[48px] items-center">
              <h2 className="bg-[#F4F4F4] border border-[#E6E6E6] h-full w-[193px] flex items-center pl-[16px] text-[#1E1E1E] text-[13px] font-[600] tracking-[-0.52px]">
                Name
              </h2>
              <p className="capitalize bg-white border border-[#E6E6E6] h-full w-full flex items-center text-[#1E1E1E] text-[13px] font-[600] tracking-[-0.52px] pl-[15px]">
                {selectedImage?.title}
              </p>
            </div>

            <div className="flex rounded-[4px] border border-[#E6E6E6] h-[48px] items-center">
              <h2 className="bg-[#F4F4F4] border border-[#E6E6E6] h-full w-[193px] flex items-center pl-[16px] text-[#1E1E1E] text-[13px] font-[600] tracking-[-0.52px]">
                Business Name
              </h2>
              <p className="capitalize bg-white border border-[#E6E6E6] h-full w-full flex items-center text-[#1E1E1E] text-[13px] font-[600] tracking-[-0.52px] pl-[15px]">
                {selectedImage?.title} Business name
              </p>
            </div>
          </div>

          <div className="mt-[16px] p-[30px] rounded-[8px] border border-[#E6E6E6]">
            <img
              src={selectedImage?.image}
              alt={selectedImage?.title}
              className="w-[500px] h-[500px] rounded-[8px]"
            />
          </div>
        </div>
      </ImageModal>
    </div>
  );
}
