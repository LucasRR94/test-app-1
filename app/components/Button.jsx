import React from "react";

export default function Button({
  haveIcon,
  invertedColorScheme,
  onClick,
  description,
}) {
  return (
    <button
      class={
        invertedColorScheme
          ? "flex bg-[#7357FF] text-white border-t-[1px] py-[12px] px-[16px] rounded-lg shadow-md ring-1 ring-offset-0 ring-offset-gray-200 ring-opacity-50 gap-y-2.5 font-sans text-base font-semibold leading-6 text-left items-center"
          : "flex text-[#7357FF] bg-[#F9F8FF] border-t-[1px] py-[12px] px-[16px] hover:bg-purple-600 py-2 px-4 rounded shadow-md gap-y-2.5 font-sans text-base font-semibold leading-6 text-left items-center"
      }
      onClick={onClick}
    >
      <div class="flex items-center">
        {haveIcon && (
          <img src="/images/plus_symbol.svg" alt="plus simbol" class="mr-2" />
        )}
        <span>{description}</span>
      </div>
    </button>
  );
}
