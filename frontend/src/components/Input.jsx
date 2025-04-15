import React, { useId } from "react";

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
} , ref) {
  const id = useId();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
