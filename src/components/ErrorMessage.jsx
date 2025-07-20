function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      <div className="text-red-600 text-lg font-medium mb-2">
        Oops! Something went wrong
      </div>
      <p className="text-red-500">
        {message || "Failed to load articles. Please try again."}
      </p>
    </div>
  );
}

export default ErrorMessage;
