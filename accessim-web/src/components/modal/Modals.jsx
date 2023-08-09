import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";

const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="rounded-lg h-40 w-40 p-2 bg-slate-200 shadow-sm hover:scale-105 duration-300"
      >
        modal
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}></Modal>
    </div>
  );
};

export default Modals;
