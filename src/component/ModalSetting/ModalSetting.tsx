import React, { FC, useEffect, useRef } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcModal from "shared/NcModal/NcModal";

export interface ModalSettingProps {
  show: boolean;
  onCloseModalSetting: () => void;
}

const ModalSetting: FC<ModalSettingProps> = ({ show, onCloseModalSetting }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
          (element as HTMLTextAreaElement).setSelectionRange(
            (element as HTMLTextAreaElement).value.length,
            (element as HTMLTextAreaElement).value.length
          );
        }
      }, 2400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <form>
        <div className="grid grid-col-2">
          <div className="col-span-1 flex">
            <div className="mt-[13px] px-[20px] py-[10px] pb-[2px] relative">
              <div className="absolute w-full h-full top-0 left-0 rounded-[49px] bg-formback blur-[3px]"></div>
              <div className="flex justify-center items-center">
                <div className="font-[600] 2xl:text-[40px] xl:text-[32px] md:text-[24px] text-[18px] text-center text-textwhite z-10 flex justify-center items-center">
                  username
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalSetting}
      contentExtraClass="max-w-[700px] h-[700px]"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="USER SETTINGS"
    />
  );
};

export default ModalSetting;
