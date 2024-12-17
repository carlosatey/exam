
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./context/useContext";
import { useState } from "react";
import { Home } from "./pages/Home";
import { Exam } from "./pages/Exam";
import { QuizData } from "./context/useContext";
import './App.css'

function App() {
  const queryClient = new QueryClient();
  const [data, setData]= useState<QuizData>({preguntas: [], respuestas: []})

  return (
    <ChakraProvider>
      <DataContext.Provider value={{ data, setData }}>
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
      </DataContext.Provider>
    </ChakraProvider>   
  )
}

export default App
