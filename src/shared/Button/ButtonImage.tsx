import React, { ButtonHTMLAttributes, FC } from "react";
// import twFocusClass from "utils/twFocusClass";

export interface ButtonProps {
  className?: string;
  translate?: string;
  sizeClass?: string;
  rounded?: number;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  targetBlank?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ButtonImage: FC<ButtonProps> = ({
  className = "",
  translate = "",
  sizeClass = "2xl:w-[100px] xl:w-[80px] w-[70px] 2xl:h-[40px] xl:h-[35px] h-[30px]",
  rounded = 15,
  children,
  type,
  loading,
  onClick = () => {},
}) => {
  const CLASSES = `nc-Button relative flex justify-center items-center cursor-pointer overflow-hidden rounded-[${rounded}px] ${sizeClass} ${translate} ${className} `;

  const _renderLoading = () => {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };

  return (
    <div className={`${CLASSES}`} onClick={onClick}>
      {loading && _renderLoading()}
      {children || `This is Button`}
      <div
        className={`2xl:visible invisible absolute top-0 left-0 w-full h-full rounded-[${rounded}px] border-[2px] border-[#949494] hover:border-[#c7c7c7] z-10 bg-transparent`}
      ></div>
    </div>
  );
};

export default ButtonImage;
