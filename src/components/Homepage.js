import React from 'react';
import { Heading, Box, Flex, Spacer} from "@chakra-ui/react";

import Drawerlist from "./Drawerlist"


const Homepg = () => (
    <Flex p="5">
        <Spacer />
        <Box p="2">
        <Heading size="xl" pl="70">Productiv 🧹</Heading>
        </Box>
        <Spacer />
        <Box>
        <Drawerlist></Drawerlist>
        </Box>
    </Flex>
);

export default Homepg;