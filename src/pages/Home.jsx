import ArticleList from "../components/ArticleList/ArticleList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black dark:text-gray-200">Bem-vindo ao CineApp</h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">Descubra as últimas notícias e artigos sobre cinema.</p>
      </header>
      <main className="w-full max-w-4xl">
        <ArticleList />
      </main>
    </div>
  );
}
