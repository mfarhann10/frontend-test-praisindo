// src/pages/Home.jsx
import { useState } from "react";

import { useGetArticles } from "../hooks/useGetArticles";
import SearchForm from "../features/SearchForm";
import ArticlesUi from "../components/ArticlesUi";

function Home() {
  const [searchParams, setSearchParams] = useState({
    q: "",
    page: 0,
    sort: "",
  });

  const handleSearch = (newParams) => {
    setSearchParams({ ...newParams, page: 0 }); // reset ke page 0 kalau user ganti pencarian
  };

  const handlePageChange = (newPage) => {
    setSearchParams((prev) => ({ ...prev, page: newPage }));
  };
  const { articles, isGetArticles, isError } = useGetArticles(searchParams);

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
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </header>

      {/* Articles List */}
      <ArticlesUi
        articles={articles}
        isLoading={isGetArticles}
        isError={isError}
        currentPage={searchParams.page}
        onPageChange={handlePageChange}
        query={searchParams}
      />
    </div>
  );
}

export default Home;
