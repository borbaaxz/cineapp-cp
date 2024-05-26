import Input from "../Input/Input";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onSubmit(userName, password);
  };

  return (
    <form
      className="h-full w-full px-5 pt-32 sm:pt-52 flex flex-col items-center gap-8 sm:gap-10"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Informe seu nome"
        onChange={(e) => setUserName(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-dark-100 dark:text-gray-200"
      />
      <Input
        type="password"
        placeholder="Informe sua senha"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-dark-100 dark:text-gray-200"
      />
      <button
        type="submit"
        className="bg-brand-500 px-6 py-3 text-white uppercase rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        Confirmar
      </button>
    </form>
  );
};

export default Form;
