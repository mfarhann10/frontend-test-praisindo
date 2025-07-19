import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      //refecthing data for 1s
      staleTime: 0
    }
  }
})

function App() {
  return (
    <QueryClientProvider>
      <ReactQueryDevtools initialIsOpen = {false}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = ""/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
