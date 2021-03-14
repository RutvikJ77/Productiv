import React from 'react';
import {
  Heading,
  Box,
  Text,
  ChakraProvider,
} from '@chakra-ui/react';

import Homepg from './components/Homepage';
import PomodoroTimer from "./components/Pomodoro";
import Background from './components/Particle';
import Taskhome from './components/Tasklist';

function App() {



  return (
    <ChakraProvider>
      <div>
        <div style={{position:"absolute",width:"100%",height:"100%"}}>
          <Background/>
        </div>
        <Homepg></Homepg>
        <div className="App">
            <PomodoroTimer></PomodoroTimer>
        </div>
      </div>
      <div>
        <Taskhome/>
      </div>
    </ChakraProvider>
  );
}

export default App;
