import PropTypes from "prop-types";

export default function Button({
  haveIcon,
  invertedColorScheme,
  onClick,
  description,
}) {
  return (
    <button
      className={
        invertedColorScheme
          ? "flex bg-[#7357FF] text-white border-t-[1px] hover:bg-white hover:text-[#7357FF] py-[12px] px-[16px] rounded-xl shadow-md ring-1 ring-offset-0 ring-offset-gray-200 ring-opacity-50 gap-y-2.5 font-sans text-base font-semibold leading-6 text-left items-center"
          : "flex text-[#7357FF] bg-[#F9F8FF] border-t-[1px] py-[12px] px-[16px] hover:bg-purple-600 hover:text-white py-2 px-4 rounded-xl shadow-md gap-y-2.5 font-sans text-base font-semibold leading-6 text-left items-center"
      }
      onClick={onClick}
    >
      <div className="flex items-center">
        {haveIcon && (
          <img
            src="/images/plus_symbol.svg"
            alt="plus simbol"
            className="mr-2"
          />
        )}
        <span>{description}</span>
      </div>
    </button>
  );
}

Button.propTypes = {
  haveIcon: PropTypes.bool,
  invertedColorScheme: PropTypes.bool,
  onClick: PropTypes.function,
  description: PropTypes.string,
};
