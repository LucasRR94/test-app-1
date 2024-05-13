import Button from "./Button";
import PropTypes from "prop-types";

export default function Modal({ title }) {
  return (
    <form className="flex flex-col gap-10 items-start w-[680px] h-[576px] bg-white rounded-lg p-12">
      <h2 className="text-[28px] w-full h-min leading-10 text-[#110C22] font-semibold">
        {title}
      </h2>
      <article className="w-full h-min flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            className="font-semibold text-[14px] leading-6 text-[#4F4B5C]"
            htmlFor="idPost"
          >
            id
          </label>
          <input
            className="w-full h-12 bg-[#F8F8F8] border-[#ECECED] border-[1px] rounded-xl py-3 px-3.5 text-base font-semibold leading-6"
            type="text"
            value=""
            id="idPost"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-semibold text-[14px] leading-6 text-[#4F4B5C]"
            htmlFor="idTitle"
          >
            Título
          </label>
          <input
            className="w-full h-12 bg-[#F8F8F8] border-[#ECECED] border-[1px] rounded-xl py-3 px-3.5 text-base font-semibold leading-6"
            type="text"
            value=""
            id="idTitle"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="font-semibold text-[14px] leading-6 text-[#4F4B5C]"
            htmlFor="idContent"
          >
            Conteúdo
          </label>
          <textarea
            className="w-full h-[100px] bg-[#F8F8F8] border-[#ECECED] border-[1px] rounded-xl py-3 px-3.5 resize-none text-base font-semibold leading-6"
            type="text"
            value=""
            id="idContent"
          />
        </div>
      </article>
      <div className="flex w-full flex-row items-end justify-end gap-6">
        <Button description="Cancelar"></Button>
        <Button description="Criar passo" invertedColorScheme></Button>
      </div>
    </form>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
};
