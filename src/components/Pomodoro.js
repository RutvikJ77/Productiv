import React, { useState, useEffect } from "react";
import { Center, Text, Heading, Box } from "@chakra-ui/react";

export default function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(true);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
                else {
                    let minutes = displayMessage ? 4 : 24;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            }

            else {
                setSeconds(seconds - 1);
            }

        }, 1000);
    }, [seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (

    <Box pt="200" mr="90">
        <div className="pomodoro">
            <div className="message">
                <Center>
                    <Text fontSize="3xl">{displayMessage && <div>Time Ticking ⏳</div>}</Text>
                    <Text fontSize="3xl">{!displayMessage && <div>Break Time ⏱</div>}</Text>
                </Center>
            </div>
            <div className="timer">
                <Center>
                    <Heading as="h2" size="3xl" mt="30">{timerMinutes}:{timerSeconds}</Heading>
                </Center>
            </div>
        </div>
    </Box>


    );
}