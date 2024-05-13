import Button from "./Button";
export default function Header({ title, handleClick }) {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-[#110C22] font-semibold text-[28px] leading-10">
        {title}
      </h1>
      <Button
        haveIcon
        onClick={handleClick}
        description="Adicionar passo"
        invertedColorScheme
      ></Button>
    </header>
  );
}
