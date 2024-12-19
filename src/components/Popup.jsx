import {
  Dialog,
  Transition,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import ReservDayPass from "./ReservDayPass";

const Popup = ({ openModal, setOpenModal }) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" open={openModal} onClose={() => setOpenModal(false)}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </TransitionChild>
        <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                as="div"
                className="border-0 p-0 rounded-lg overflow-hidden w-full max-w-4xl my-8 text-black"
              >
                <div className="flex bg-[#efe2bd] items-center justify-end px-5 py-3">
                  <button
                    type="button"
                    className="text-white-dark hover:text-dark"
                    onClick={() => setOpenModal(false)}
                  >
                    x
                  </button>
                </div>
                <div className="py-10 px-5 bg-[#efe2bd] w-full flex justify-center items-center">
                  <ReservDayPass />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Popup;
