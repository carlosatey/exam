export interface Question {
    id: number;
    texto: string;
    opciones: string[];
}

export interface Answer {
    id: number;
    respuestaCorrecta: number;
    explicacion: string;
}

export interface QuizData {
    preguntas: Question[];
    respuestas: Answer[];
}