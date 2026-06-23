"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2">
        <label className="text-sm font-medium text-white">
          {label}
        </label>

        <input
          ref={ref}
          className={clsx(
            "w-full rounded-lg border border-gray-700 bg-[#292929] px-4 py-3 text-white outline-none transition-all duration-300",
            "placeholder:text-gray-500",
            "focus:border-green-500 focus:ring-2 focus:ring-green-500/30",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;