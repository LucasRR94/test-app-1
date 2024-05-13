import Header from "../components/Header";
import { useState } from "react";
import CardGallery from "../components/CardGallery";
import Modal from "../components/Modal";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Cognittron" },
    { name: "description", content: "index cognittron!" },
  ];
};

export async function loader({ params }) {
  const { trail } = params; // get the dynamic parameters

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
  return json({ cards }); // return the trail-1
}

export default function Explore() {
  const [modalActive, setModalActive] = useState(false);

  const { cards } = useLoaderData();

  return (
    <main className="m-0 p-0 w-full h-full">
      <div className="flex flex-col max-w-[800px] mx-auto my-20 gap-10">
        <Header title="Título da trilha" handleClick={setModalActive}></Header>
        <CardGallery cards={cards}></CardGallery>
      </div>
      {modalActive && (
        <span className="m-0 p-0 w-full h-full fixed bg-[#110C22A3] top-0 right-0 flex justify-center items-center">
          <Modal title="Adicionar Passo"></Modal>
        </span>
      )}
      <button
        onClick={() => {
          setModalActive((currentState) => !currentState);
        }}
      >
        test
      </button>
    </main>
  );
}
