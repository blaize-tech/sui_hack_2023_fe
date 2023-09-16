import { Box, Text, Flex } from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';
import React from "react";

export const Dashboard = () => {
  return (
    <Box w="100%" h="100%">
      <HtmlMeta title="Dashboard" />
      <Flex as="section" justifyContent="center" alignItems="center" w="100%" h="100%">
        {/*<Text as="h1">Dashboard</Text>*/}
        <Text py="70px" textAlign="center" fontFamily="orbitron"
              fontSize="60px" opacity="0.3"
              fontWeight={900}>- Coming soon -</Text>
      </Flex>
    </Box>
  );
};
