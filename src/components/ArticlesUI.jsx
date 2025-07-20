import ArticleCard from "./ArticleCard";
import ArticleSkeleton from "./ArticleSkeleton";
import ErrorMessage from "./ErrorMessage";

function ArticlesUI ({ articles, isLoading, isError, query }){
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {Array.from({ length: 10 }).map((index) => (
            <ArticleSkeleton key={index} />
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
            {query 
              ? `No articles found for "${query}". Try searching with different keywords.`
              : "Enter a search term to find articles."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Results header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-600">
            Found {articles.length} articles for "{query}"
          </p>
        )}
      </div>

      {/* Articles grid */}
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard key={article._id || index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesUI;