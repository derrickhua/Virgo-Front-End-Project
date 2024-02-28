import React, { ReactElement, useState } from "react";

interface FloatLabelProps {
  children: ReactElement;
  label: string;
  value: string;
  disabled?: boolean;
}

const FloatLabel: React.FC<FloatLabelProps> = ({
  children,
  label,
  value,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const labelClass = `absolute left-3 transition-all ease-in-out duration-300 pointer-events-none ${
    isFocused || value ? "top-2 text-xs" : "top-1/2 text-base"
  } transform -translate-y-1/2 ${disabled ? "text-[#F5F5F5]" : "text-[#979797]"}`;

  const inputClass = "pt-3 pl-3 pr-3 pb-1"; 

  const childWithProps = React.cloneElement(children, {
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    className: `${children.props.className} ${inputClass}`, // Merge existing classes with new padding
    disabled,
  });

  return (
    <div className="relative mt-2">
      {childWithProps}
      <label className={`${labelClass}`}>{label}</label>
    </div>
  );
};

export default FloatLabel;