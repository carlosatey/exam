
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter} from "react-router-dom";
import { DataContext } from "./context/useContext";
import { useState } from "react";
import { RouterController } from "./routerController/routerController";
import { QuizData } from "./interface/QuizData";
import './App.css'

function App() {
  const queryClient = new QueryClient();
  const [data, setData]= useState<QuizData>({preguntas: [], respuestas: []})

  return (
    <ChakraProvider>
      <DataContext.Provider value={{ data, setData }}>
        <QueryClientProvider client={queryClient}> 
          <BrowserRouter>
            <RouterController>
            </RouterController>
          </BrowserRouter>
          <ReactQueryDevtools/>
        </QueryClientProvider> 
      </DataContext.Provider>
    </ChakraProvider>   
  )
}

export default App
