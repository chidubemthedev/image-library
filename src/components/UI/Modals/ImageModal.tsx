import { useEffect, useRef, useState } from "react";
import { CancelIcon, DropdownIcon } from "../../Icons";
import DeleteModal from "./DeleteModal";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ImageModal = ({ isOpen, onClose, children }: ModalProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center justify-between bg-white p-6 rounded-lg w-full mx-4">
        <div className="w-full flex items-center justify-between">
          <button onClick={onClose}>
            <CancelIcon />
          </button>

          <div className="flex items-center gap-[12px]">
            <div
              ref={dropdownRef}
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative flex items-center rounded-[4px] bg-[#F6F6F6] gap-[4px] px-[16px] py-[14px] text-[#2B50D6] text-[14px] font-[600] tracking-[-0.56px] hover:cursor-pointer"
            >
              Actions
              <span>
                <DropdownIcon />
              </span>
              {showDropdown && (
                <div className="absolute right-[-73px] top-[70px] rounded-[4px] overflow-hidden z-30 bg-white shadow-cardDropdownShadow">
                  <ul className="m-[12px]">
                    <li className="flex items-center hover:cursor-pointer w-[148px] h-[44px]">
                      Download image
                    </li>
                    <li
                      onClick={() => setIsDeleteModalOpen(true)}
                      className="flex items-center hover:cursor-pointer text-[#F01C1C] w-[148px] h-[44px]"
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="rounded-[4px] bg-[#F6F6F6] px-[16px] py-[14px] text-[#2B50D6] text-[14px] font-[600] tracking-[-0.56px]">
              Save
            </button>
          </div>
        </div>
        {children}
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <div>are you sure you want to delete?</div>
      </DeleteModal>
    </div>
  );
};

export default ImageModal;
