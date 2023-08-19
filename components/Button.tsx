import { MouseEventHandler } from "react";
import Image from "next/image";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  type,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      //   bgColor and textColor can change
      className={`flexCenter gap-3 px-4 py-3 rounded-xl text-sm font-medium max-md:w-full
      ${textColor ? textColor : 'text-white' }
      ${isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple' }
      ` }
      onClick={handleClick}
    >
        {title}
      {leftIcon && <Image src={leftIcon} width={40} height={14} alt="left" />}
      {rightIcon && <Image src={rightIcon} width={40} height={14} alt="right" />}
    </button>
  );
};

export default Button;
