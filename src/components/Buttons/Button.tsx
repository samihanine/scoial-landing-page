import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  outlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  outlined,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${
        outlined
          ? "bg-white text-black border border-gray-400 hover:bg-gray-200"
          : "bg-black text-white hover:bg-gray-700"
      }  px-10 py-3 rounded-xl shadow-md h-14 font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
