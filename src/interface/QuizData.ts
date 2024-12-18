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