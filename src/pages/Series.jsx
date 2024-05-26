import React from 'react';

export default function Series() {
  const seriesList = [
    { 
      id: 1, 
      title: 'Breaking Bad', 
      description: 'Um professor de química do ensino médio que se transforma em um poderoso chefão das drogas.',
      image: 'https://aventurasnahistoria.uol.com.br/media/uploads/curiosidades/breakin_bad_heisenberg_capa.jpg' 
    },
    { 
      id: 2, 
      title: 'Game of Thrones', 
      description: 'Uma série épica de fantasia baseada na série de romances "As Crônicas de Gelo e Fogo" de George R. R. Martin.',
      image: 'https://s2.glbimg.com/lip1rXjb7IfKWKhzwjKCCsKJcrA=/e.glbimg.com/og/ed/f/original/2017/08/17/game-of-thrones.jpg' 
    },
    { 
      id: 3, 
      title: 'Stranger Things', 
      description: 'Um grupo de amigos em uma pequena cidade enfrenta fenômenos sobrenaturais e um governo secreto.',
      image: 'https://soucg.com.br/wp-content/uploads/2024/05/Stranger-Things-Tudo-o-que-sabemos-sobre-a-temporada.jpg' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Séries Populares</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {seriesList.map(series => (
          <div key={series.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
            <img src={series.image} alt={series.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{series.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{series.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
