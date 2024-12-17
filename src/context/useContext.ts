import React, { Dispatch, SetStateAction, useContext } from "react";

interface Question {
    id: number;
    texto: string;
    opciones: string[];
}

interface Answer {
    id: number;
    respuestaCorrecta: number;
    explicacion: string;
}

export interface QuizData {
    preguntas: Question[];
    respuestas: Answer[];
}

interface DataContext {
    data: QuizData;
    setData: Dispatch<SetStateAction<any>>;
}

export const DataContext = React.createContext<DataContext>({
    data: {
        preguntas: [],
        respuestas: []
    },
    setData: () => { }
})

export const useDataContext = () => {
    return useContext(DataContext);
}