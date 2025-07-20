import axios from "axios";

const API_KEY = import.meta.env.VITE_NYT_API_KEY
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

export async function getArticles(query){
    try{
        const res = await axios.get(BASE_URL, {
            params: {
                q: query,
                "api-key": API_KEY
            }
        })

        const articles = res.data?.response?.docs

        return articles
    }catch(err){
        if(axios.isAxiosError(err)){
            console.error(err.response?.data)
        }
        return{
            success: false,
            message: err.response?.data || "Something went wrong"
        }
    }
}