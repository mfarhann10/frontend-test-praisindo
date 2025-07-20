// src/pages/Home.jsx
import { useState } from "react";
import { useGetArticles } from "../hooks/useGetArticles";
import ArticlesUI from "../components/ArticlesUi";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const { articles, isGetArticles, isError } = useGetArticles(query);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setQuery(searchTerm.trim());
    }
  };


  return (
        <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              The New York Times
            </h1>
            <p className="text-gray-600">Search articles and stay informed</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Articles List */}
      <ArticlesUI
        articles={articles}
        isLoading={isGetArticles}
        isError={isError}
        query={query}
      />
    </div>
  );
}

export default Home;
