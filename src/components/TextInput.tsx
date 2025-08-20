import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";


export interface TextInputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: "outlined" | "filled" | "ghost";
  size?: "small" | "medium" | "large";
  password?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-4 py-3 text-lg",
};

const variantClasses = {
  outlined: "border border-gray-300 focus:border-blue-500 bg-white",
  filled: "bg-gray-100 focus:bg-white border border-transparent",
  ghost: "bg-transparent border-b border-gray-300 focus:border-blue-500",
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  helperText,
  error,
  disabled,
  loading,
  variant = "outlined",
  size = "medium",
  password = false,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative">
        <input
          type={password && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          disabled={disabled || loading}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full rounded-lg outline-none transition 
            ${sizeClasses[size]} ${variantClasses[variant]} 
            ${error ? "border-red-500" : ""} 
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        />

        {/* Password Toggle */}
        {password && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 animate-spin">
            <Loader2 className="w-5 h-5 animate-spin text-gray-600" />
          </div>
        )}
      </div>

      {helperText && (
        <span className={`text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextInput;
