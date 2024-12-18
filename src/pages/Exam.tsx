import {Flex, Text, OrderedList, ListItem, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Button} from "@chakra-ui/react"
import { useContext } from 'react';
import { DataContext } from "../context/useContext";
import { Editable, EditableInput, EditablePreview} from '@chakra-ui/react'
import { Question, Answer, QuizData } from "../interface/QuizData";
import { useState } from "react";

const Exam = () => {

    const {data} = useContext(DataContext);

    const obtenerRespuesta = (preguntaId: number) => {
        return data.respuestas.find(respuesta => respuesta.id === preguntaId);
    };

    const [editedQuestions, setEditedQuestions] = useState<Question[]>(data.preguntas);
    const [editedAnswers, setEditedAnswers] = useState<Answer[]>(data.respuestas);

    const handleQuestionChange = (preguntaId: number, newText: string) => {
        setEditedQuestions(prev => prev.map(q => 
            q.id === preguntaId ? { ...q, texto: newText } : q
        ));
    };

    const handleOptionChange = (preguntaId: number, optionIndex: number, newText: string) => {
        setEditedQuestions(prev => prev.map(q => 
            q.id === preguntaId 
                ? { ...q, opciones: q.opciones.map((opt, idx) => 
                    idx === optionIndex ? newText : opt
                  )}
                : q
        ));
    };

    const handleExplanationChange = (preguntaId: number, newExplanation: string) => {
        setEditedAnswers(prev => prev.map(a => 
            a.id === preguntaId ? { ...a, explicacion: newExplanation } : a
        ));
    };

    const sendExam = () => {
        const quizData: QuizData = {
            preguntas: editedQuestions,
            respuestas: editedAnswers
        };
        
        console.log('Quiz Data to send:', quizData);
    };

    return (
        <Flex flexDirection="column" w="100vw" alignItems="center" justifyContent="center">
            <Text mt="20px" mb="20px" fontSize="28px" fontWeight="600">Examen</Text>
            <Accordion allowToggle w="70vw">
                {data.preguntas.map((pregunta) => {
                    const respuesta = obtenerRespuesta(pregunta.id);
                    return (
                        <AccordionItem key={pregunta.id}>
                            <Text fontSize="28px">
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        <Editable 
                                            defaultValue={pregunta.texto}
                                            onChange={(value) => handleQuestionChange(pregunta.id, value)}
                                        >
                                            <EditablePreview />
                                            <EditableInput />
                                        </Editable>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Text>
                            <AccordionPanel pb={4}>
                                <OrderedList mb={4}>
                                    {pregunta.opciones.map((opcion, index) => (
                                        <ListItem 
                                            key={index}
                                        >
                                            <Editable 
                                                key={index} 
                                                defaultValue={opcion}
                                                color={respuesta && index === respuesta.respuestaCorrecta ? "green.500" : "inherit"}
                                                fontWeight={respuesta && index === respuesta.respuestaCorrecta ? "bold" : "normal"}
                                                onChange={(value) => handleOptionChange(pregunta.id, index, value)}
                                            >
                                                <EditablePreview />
                                                <EditableInput />
                                            </Editable>
                                        </ListItem>
                                    ))}
                                </OrderedList>
                                {respuesta && (
                                    <Box mt={2}>
                                        <Text fontWeight="bold" mb="5px" textAlign='center'>Explicación:</Text>
                                        <Editable 
                                            defaultValue={respuesta.explicacion}
                                            bg="green.500"
                                            color="white"
                                            textAlign='center'
                                            borderRadius="5px"
                                            onChange={(value) => handleExplanationChange(pregunta.id, value)}
                                        >
                                            <EditablePreview />
                                            <EditableInput />
                                        </Editable>
                                    </Box>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>

            <Button m="20px" colorScheme="green" onClick={sendExam}>Enviar Examen</Button>
        </Flex>
    )
}

export {Exam}