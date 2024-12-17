
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Exam } from "./pages/Exam";
import './App.css'

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
    
        <QueryClientProvider client={queryClient}> 
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Home/>} />
                <Route path="/exam" element={<Exam/>} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools/>
        </QueryClientProvider> 
     
    </ChakraProvider>   
  )
}

export default App
