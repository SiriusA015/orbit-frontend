import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonImage from "shared/Button/ButtonImage";
import Image from "next/image";

export interface NcModalProps {
  renderContent: () => ReactNode;
  renderTrigger?: (openModal: Function) => ReactNode;
  contentExtraClass?: string;
  contentPaddingClass?: string;
  triggerText?: ReactNode;
  modalTitle?: ReactNode;
  isOpenProp?: boolean;
  onCloseModal?: () => void;
}

const NcModal: FC<NcModalProps> = ({
  renderTrigger,
  renderContent,
  contentExtraClass = "max-w-screen-xl",
  contentPaddingClass = "py-4 px-6 md:py-5",
  triggerText = "Open Modal",
  modalTitle = "Modal title",
  isOpenProp,
  onCloseModal,
}) => {
  let [isOpen, setIsOpen] = useState(!!isOpenProp);

  function closeModal() {
    if (typeof isOpenProp !== "boolean") {
      setIsOpen(false);
    }
    onCloseModal && onCloseModal();
  }

  function openModal() {
    if (typeof isOpenProp !== "boolean") {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    setIsOpen(!!isOpenProp);
  }, [isOpenProp]);

  return (
    <div className="nc-NcModal">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-1 text-center md:px-4">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-900"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-3000"
              leaveFrom="opacity-10"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0"
                style={{
                  background: "rgba(10, 10, 10, 0.7)",
                  backdropFilter: "blur(2px)",
                }}
              />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-900"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-900"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transfor shadow-xl rounded-[50px] border-[2px] border-borderwhite ${contentExtraClass}`}
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
                }}
              >
                <div className="py-2 text-center relative border-b-[3px] border-[#C5C5C5]">
                  <div className="absolute top-[20px] right-[30px] w-[38px] h-[38px]">
                    <ButtonImage
                      onClick={closeModal}
                      sizeClass="w-[38px] h-[38px]"
                      rounded={12}
                    >
                      <Image
                        alt="camera"
                        src="/static/images/icons/close.png"
                        className="w-full h-full"
                        width={76}
                        height={76}
                      />
                    </ButtonImage>
                  </div>
                  {modalTitle && (
                    <Dialog.Title
                      as="h3"
                      className="text-[40px] font-[600] text-textwhite tracking-[0.06em]"
                    >
                      {modalTitle}
                    </Dialog.Title>
                  )}
                </div>
                <div className={contentPaddingClass}>{renderContent()}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default NcModal;
