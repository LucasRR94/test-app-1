import Button from "./Button";
export default function Header({ title, onClick }) {
  return (
    <header className="flex max-w-[800px] justify-between mr-12 items-center">
      <h1 className="text-[#110C22] font-semibold text-xl leading-10">
        {title}
      </h1>
      <Button
        haveIcon
        onClick={onClick}
        description="Adicionar passo"
        invertedColorScheme
      ></Button>
    </header>
  );
}
