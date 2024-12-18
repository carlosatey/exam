import React, { Dispatch, SetStateAction, useContext } from "react";
import { QuizData } from "../interface/QuizData";


interface DataContext {
    data: QuizData;
    setData: Dispatch<SetStateAction<QuizData>>;
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