import { useState } from "react";
import { MAX_NUMBER_PAGES_CARDS } from "../utils/constants";

const getSlicePages = (currentPage, valueOffset, numberPages) => {
  const offSet = valueOffset || MAX_NUMBER_PAGES_CARDS;
  console.log(
    Array(offSet).map((_, index) => {
      return currentPage + index;
    })
  );
  if (currentPage + offSet <= numberPages) {
    return Array.from({ length: offSet }, (_, index) => {
      return currentPage + index;
    });
  }
  return Array.from({ length: numberPages - currentPage + 1 }, (_, index) => {
    return currentPage + index;
  });
};

export default function ({ currentPageNumber, numberPages, handleClick }) {
  console.log(handleClick);
  const [currentWindow, setCurrentWindow] = useState(
    getSlicePages(currentPageNumber, null, numberPages)
  );
  return (
    <ul className="flex flex-row gap-1 max-w-[800px] gap-8">
      {currentWindow.map((pageIndex, index) => {
        return (
          <button
            key={index}
            className="rounded-lg w-8 p-1.5 bg-[#7357FF] text-white"
            onClick={() => {
              console.log("this is a test");
            }}
          >
            {pageIndex}
          </button>
        );
      })}
    </ul>
  );
}
