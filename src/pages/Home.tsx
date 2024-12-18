import {Flex,Text} from "@chakra-ui/react"
import { FormQuery } from "../components/FormQuery"

const Home = () => {
    return (
        <Flex w="100%" flexDirection="column" alignItems="center" justifyContent="center" width="100vw" height="100vh">
            <Text mb="20px" fontSize="28px" fontWeight="600">Home</Text>
            <FormQuery/>
        </Flex>
    )
}

export {Home}