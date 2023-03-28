import React, { ButtonHTMLAttributes, FC } from "react";
// import twFocusClass from "utils/twFocusClass";

export interface ButtonProps {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  targetBlank?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  className = "rounded-[13px] bg-formback hover:bg-formbackhover border-[2px] border-[#949494] hover:border-[#747474]",
  translate = "",
  sizeClass = "2xl:w-[100px] xl:w-[80px] w-[70px] 2xl:h-[40px] xl:h-[35px] h-[30px]",
  fontSize = "font-Inter font-[600] text-textwhite 2xl:text-[18px] xl:text-[16px] text-[12px]",
  disabled = false,
  children,
  type,
  loading,
  onClick = () => {},
}) => {
  const CLASSES = `nc-Button relative flex justify-center items-center cursor-pointer ${fontSize} ${sizeClass} ${translate} ${className} `;
  // twFocusClass(true);

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
    <button
      disabled={disabled || loading}
      className={`${CLASSES}`}
      onClick={onClick}
      type={type}
    >
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
