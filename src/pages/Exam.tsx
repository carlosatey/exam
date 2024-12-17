import {Flex,Text} from "@chakra-ui/react"
import { useContext } from 'react';
import { DataContext } from "../context/useContext";


const Exam = () => {

    const {data} = useContext(DataContext);
    return (
        <>
            <Text mb="20px" fontSize="28px" fontWeight="600">Examen</Text>
            <Flex>
                {data.preguntas.map((pregunta) => (
                    <div key={pregunta.id}>
                        <h3>{pregunta.texto}</h3>
                        <ul>
                            {pregunta.opciones.map((opcion, index) => (
                                <li key={index}>{opcion}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Flex>
        </>
    )
}

export {Exam}