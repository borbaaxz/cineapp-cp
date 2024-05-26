import React from 'react';
import { useParams } from 'react-router-dom';

function Contato() {
  const { subject } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <form action="post" className="flex flex-col w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-black dark:text-gray-200 mb-6">Contato</h1>
        
        <label htmlFor="nome" className="text-black dark:text-gray-300 mb-2">Nome:</label>
        <input
          className="mb-4 p-3 shadow-md rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-gray-200"
          type="text"
          name="Nome"
          id="nome"
        />

        <label htmlFor="email" className="text-black dark:text-gray-300 mb-2">E-mail:</label>
        <input
          className="mb-4 p-3 shadow-md rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-gray-200"
          type="email"
          name="Email"
          id="email"
        />

        <label htmlFor="mensagem" className="text-black dark:text-gray-300 mb-2">Mensagem:</label>
        <textarea
          name="Mensagem"
          id="mensagem"
          className="mb-4 p-3 shadow-md rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-gray-200"
          rows="5"
          defaultValue={subject ? `Assunto: ${subject}` : ''}
        ></textarea>

        <button
          className="mt-5 py-3 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contato;
