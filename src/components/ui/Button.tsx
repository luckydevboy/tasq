import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva(
  "relative flex items-center gap-x-2 rounded-lg px-4 py-2 font-semibold text-sm",
  {
    variants: {
      variant: { outlined: "", contained: "" },
      color: {
        primary: "",
        secondary: "",
        success: "",
        danger: "",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        class:
          "bg-blue-700 hover:bg-blue-500 text-white disabled:bg-blue-200 disabled:bg-blue-300",
      },
      {
        variant: "outlined",
        color: "success",
        class: "bg-green-50 hover:bg-green-100 text-green-700",
      },
      {
        variant: "outlined",
        color: "danger",
        class: "bg-red-50 hover:bg-red-100 text-red-700",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
    },
  },
);

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  isLoading,
  variant,
  color,
  ...props
}: Props) => {
  return (
    <button className={button({ variant, color, className })} {...props}>
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
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
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
