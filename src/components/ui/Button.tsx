// components/ui/Button.tsx
import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode;
 variant?: "primary" | "outline" | "ghost";
}

const Button = ({children, variant = "primary", className = "", ...props}: ButtonProps) => {
 const baseStyles = "px-6 py-3  font-semibold transition-all duration-200 flex items-center justify-center";

 const variantStyles = {
  primary: "bg-[#57E1FF] text-[#030718] hover:bg-[#35FF9E]",
  outline: "bg-accent/20 border-2 border-accent text-accent hover:bg-white hover:text-[#6A54FF]",
  ghost: "bg-transparent text-white hover:text-[#57E1FF]",
 };

 return (
  <button
   className={`${baseStyles} ${variantStyles[variant]} ${className}`}
   {...props}
  >
   {children}
  </button>
 );
};

export default Button;
