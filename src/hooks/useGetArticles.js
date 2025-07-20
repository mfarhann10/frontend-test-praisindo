import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/apiArticle";


export function useGetArticles(params) {
  const { q, page = 0, sort = "" } = params;
  const {
    data: articles,
    isPending: isGetArticles,
    isError,
  } = useQuery({
    queryKey: ["articles", { q, page, sort }],
    queryFn: () => getArticles(params),
    enabled: !!q,
    keepPreviousData: true,
  });

  return { articles, isGetArticles, isError };
}