export default function Card({ title, content }) {
  return (
    <article className="flex flex-col p-6 font-sans border-[#E2E2E4] bg-white border-[1px] rounded-lg">
      <h3 className="text-lg font-semibold text-[#110C22]">{title}</h3>
      <p className="text-[#4F4B5C]">{content}</p>
    </article>
  );
}
