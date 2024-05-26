import { useState } from 'react';
import data from '../../../articles.json';
import Article from '../Article/Article';
import Input from '../Input/Input';

const ArticleList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(data);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filteredResults = data.filter((search) =>
      search.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredArticles(filteredResults);
  };

  return (
    <>
      <div className="flex justify-center mt-5">
        <Input
          type="text"
          name="searchPost"
          id="searchPost"
          value={searchInput}
          placeholder= "    Digite para buscar"
          onChange={handleInputChange}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-dark-100 dark:text-gray-200"
        />
      </div>

      <div className="pb-20 mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => <Article key={index} {...article} />)
        ) : (
          <p className="text-xl col-span-3 mt-4 text-center dark:text-gray-300">
            Nenhum Artigo Encontrado 😔
          </p>
        )}
      </div>
    </>
  );
};

export default ArticleList;
