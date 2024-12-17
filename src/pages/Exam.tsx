import {Flex,Text, OrderedList, ListItem} from "@chakra-ui/react"
import { useContext } from 'react';
import { DataContext } from "../context/useContext";


const Exam = () => {

    const {data} = useContext(DataContext);
    return (
        <>
            <Text mb="20px" fontSize="28px" fontWeight="600">Examen</Text>
            <Flex flexDirection="column" gap="60px">
                {data.preguntas.map((pregunta) => (
                    <Flex key={pregunta.id} flexDirection="column" gap="20px">
                        <Text fontSize="16px" fontWeight="600">{pregunta.texto}</Text>
                        <OrderedList>
                            {pregunta.opciones.map((opcion, index) => (
                                <ListItem key={index}>{opcion}</ListItem>
                            ))}
                        </OrderedList>
                    </Flex>
                ))}
            </Flex>
        </>
    )
}

export {Exam}