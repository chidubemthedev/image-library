import { CancelIcon } from "../../Icons";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const DeleteModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center justify-between bg-white p-6 rounded-lg max-w-3xl mx-4">
        <div className="w-full flex items-center justify-between">
          <button onClick={onClose}>
            <CancelIcon />
          </button>

          <h1>Delete</h1>

          <div>x</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DeleteModal;
