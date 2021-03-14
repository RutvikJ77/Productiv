import React,{useEffect,useState} from 'react';
import {
    HStack,
    Box,
    Text,
    CircularProgress,
    CircularProgressLabel,
    Button

} from "@chakra-ui/react";


function Taskhome() {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);

    return (
        <HStack spacing={3} justifyContent="center" mt="200">
            <Button variant="outline" color="red.100" mr="30">
                Priority
        </Button>
            <Box boxShadow="md" rounded="md" w="500px" mr="5" p="2">
                <Text fontsize="32px">Complete the productiv app.</Text>
            </Box>
            <CircularProgress value={50} size="50px" color="green.400">
                <CircularProgressLabel>1</CircularProgressLabel>
            </CircularProgress>
        </HStack>)
}

export default Taskhome;