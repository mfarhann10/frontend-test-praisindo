function ArticleSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-48 h-32 bg-gray-300 rounded-lg flex-shrink-0"></div>
        <div className="flex-1 space-y-3">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="flex gap-2">
            <div className="h-4 bg-gray-300 rounded w-20"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSkeleton;
