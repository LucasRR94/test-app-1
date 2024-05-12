import Card from "./Card";
import Paginator from "./Paginator";
import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ currentPage }) {
  // Simulate a delay to mimic server response time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock data (replace with actual server request logic)
  const cards = [
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Curabitur blandit tempus porttitor. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. ",
    },
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Curabitur blandit tempus porttitor. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. ",
    },
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      title: "Titulo do passo",
      content: "Conteúdo do passo. Maecenas faucibus mollis interdum.",
    },
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Curabitur blandit tempus porttitor. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. ",
    },
  ];

  return json({ cards, maxNumberCards: 25 });
}

export default function CardGallery() {
  const [page, setPage] = useState(1);
  const currentPage = page || 1;
  console.log(currentPage);
  // const [cards, setCards] = useLoaderData({ currentPage });
  const cards = [
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Curabitur blandit tempus porttitor. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. ",
    },
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Curabitur blandit tempus porttitor. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. ",
    },
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      title: "Titulo do passo",
      content: "Conteúdo do passo. Maecenas faucibus mollis interdum.",
    },
    {
      title: "Titulo do passo",
      content:
        "Conteúdo do passo. Curabitur blandit tempus porttitor. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. ",
    },
  ];
  const currentPageNumber = 1;
  const numberPages = 10;
  const changePage = (pageIndex) => {
    setPage(pageIndex);
  };
  return (
    <section className="flex flex-col gap-6 max-w self-center">
      {cards.map((actualCard) => {
        const { title, content } = actualCard;
        return <Card title={title} content={content}></Card>;
      })}
      <Paginator
        currentPageNumber={currentPageNumber}
        numberPages={numberPages}
        handleClick={changePage}
      ></Paginator>
    </section>
  );
}
