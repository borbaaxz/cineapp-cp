import React from 'react';

export default function Filmesvir() {
  const filmesList = [
    { 
      id: 1, 
      title: 'The Batman', 
      description: 'Um novo filme do Batman estrelado por Robert Pattinson.',
      image: 'https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_.jpg' 
    },
    { 
      id: 2, 
      title: 'Avatar 2', 
      description: 'A continuação de Avatar, dirigida por James Cameron.',
      image: 'https://upload.wikimedia.org/wikipedia/pt/5/54/Avatar_The_Way_of_Water_poster.jpg' 
    },
    { 
      id: 3, 
      title: 'Jurassic World: Dominion', 
      description: 'O terceiro filme da nova trilogia Jurassic World.',
      image: 'https://tm.ibxk.com.br/2022/04/28/28133231405219.jpg' 
    },
  
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Filmes que estão por vir</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {}
        {filmesList.map(filme => (
          <div key={filme.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
            <img src={filme.image} alt={filme.title} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-semibold">{filme.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{filme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
