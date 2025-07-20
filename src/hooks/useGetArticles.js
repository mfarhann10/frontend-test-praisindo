import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/apiArticle";


export function useGetArticles(query){
    const {data: articles, isPending: isGetArticles, isError} = useQuery({
        queryKey: ["articles", query],
        queryFn: () => getArticles(query),
        enabled: !!query,
    })

    return {articles, isGetArticles, isError}
}