import {Flex, Text, OrderedList, ListItem, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel} from "@chakra-ui/react"
import { useContext } from 'react';
import { DataContext } from "../context/useContext";


const Exam = () => {

    const {data} = useContext(DataContext);

    const obtenerRespuesta = (preguntaId: number) => {
        return data.respuestas.find(respuesta => respuesta.id === preguntaId);
    };

    return (
        <Flex flexDirection="column" w="100vw" h="100vh" alignItems="center" justifyContent="center">
            <Text mb="20px" fontSize="28px" fontWeight="600">Examen</Text>
            <Accordion allowToggle w="70vw">
                {data.preguntas.map((pregunta) => {
                    const respuesta = obtenerRespuesta(pregunta.id);
                    return (
                        <AccordionItem key={pregunta.id}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {pregunta.texto}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <OrderedList mb={4}>
                                    {pregunta.opciones.map((opcion, index) => (
                                        <ListItem 
                                            key={index}
                                            color={respuesta && index === respuesta.respuestaCorrecta ? "green.500" : "inherit"}
                                            fontWeight={respuesta && index === respuesta.respuestaCorrecta ? "bold" : "normal"}
                                        >
                                            {opcion}
                                        </ListItem>
                                    ))}
                                </OrderedList>
                                {respuesta && (
                                    <Box mt={2}>
                                        <Text fontWeight="bold">Explicación:</Text>
                                        <Text>{respuesta.explicacion}</Text>
                                    </Box>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Flex>
    )
}

export {Exam}