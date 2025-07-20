import { useGetArticles } from "../hooks/useGetArticles";

function Test() {
    const query = "bitcoin";
    const { articles, isGetArticles } = useGetArticles(query);

    if(isGetArticles) return(
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    )
    console.log(articles);
    return (
        <div>
            ini test page
        </div>
    )
}

export default Test
