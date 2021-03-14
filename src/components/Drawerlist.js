import React, { useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    Input,
    Box,
    FormLabel,
    Select,
    useDisclosure,
    useToast,
    Wrap,
    Center,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons";



function Drawerlist() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const toast = useToast()
    const toastIdRef = React.useRef()
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response)
            //   window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    function checkToast() {
        toastIdRef.current = toast({
            title: "Task added successfully.",
            status: "success",
            duration: 3000,
            isClosable: false,
        })
    };

    return (
        <>
            <Button rightIcon={<AddIcon />} colorScheme="teal" mr="4" size="md" onClick={onOpen}>
                Add Task 🎯
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
                size="sm">
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="2px">
                            Create a new Task 💯
                        </DrawerHeader>

                        <DrawerBody pt="10" align>
                            <Stack spacing="24px">
                            <form
                                id="task"
                                onSubmit={onSubmitForm}>
                                <Input name="tasks" 
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Enter task"/>
                            </form>

                                <Box pt="4">
                                    <FormLabel>Select Priority 🔥</FormLabel>
                                    <Select variant="filled" id="priority" defaultValue="High" pt="1">
                                        <option value="High">High 🤯</option>
                                        <option value="Moderate">Moderate 😌</option>
                                        <option value="Low">Low 🥱</option>
                                    </Select>
                                </Box>

                                <Box>
                                    <Wrap>
                                        <Center>
                                            <Text pr="3" > Session : </Text>
                                            <NumberInput size="md" maxW={24} defaultValue={1} min={1} max={4}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Center>
                                    </Wrap>
                                </Box>

                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" onClick={checkToast} form="task" type="submit">Add ✅</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}



export default Drawerlist;