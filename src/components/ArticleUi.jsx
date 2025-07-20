import ArticleCard from "./ArticleCard";
import ArticleSkeleton from "./ArticleSkeleton";
import ErrorMessage from "./ErrorMessage";

function ArticleUi({
  articles,
  isLoading,
  isError,
  query,
  currentPage,
  onPageChange,
}) {
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <ArticleSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage />
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <div className="text-gray-600 text-lg font-medium mb-2">
            No articles found
          </div>
          <p className="text-gray-500">
            {query?.q
              ? `No articles found for "${query.q}". Try searching with different keywords.`
              : "Enter a search to find articles."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-600">
            Found {articles.length} articles for "{query.q || ""}"
          </p>
        )}
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      <p className="text-sm text-gray-500 text-center mt-2">
        Page {currentPage + 1}
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ArticleUi;
