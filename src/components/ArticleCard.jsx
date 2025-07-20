import { Calendar, ExternalLink, User, Tag } from 'lucide-react';
function ArticleCard({ article }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}

        <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0">
          <img
            src={article.multimedia?.default?.url}
            alt={article.headline?.main || "Article image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          {/* Headline */}
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            <a
              href={article.web_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2"
            >
              {article.headline?.main || "No Title Available"}
              <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 opacity-60" />
            </a>
          </h2>

          {/* Abstract/Snippet */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.abstract || article.snippet || "No description available."}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            {/* Author */}
            {article.byline?.original && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{article.byline.original}</span>
              </div>
            )}

            {/* Date */}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.pub_date)}</span>
            </div>

            {/* Section */}
            {article.section_name && (
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span>{article.section_name}</span>
              </div>
            )}
          </div>

          {/* Keywords/Tags */}
          {article.keywords && article.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.keywords.slice(0, 3).map((keyword, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {keyword.value}
                </span>
              ))}
              {article.keywords.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                  +{article.keywords.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;