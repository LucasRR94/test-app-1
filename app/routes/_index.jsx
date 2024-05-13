import { Form } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Cognittron" },
    { name: "description", content: "index cognittron!" },
  ];
};

export const action = async () => {
  return null;
};

export default function Index() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Você clicou em enviar.");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </Form>
  );
}
