import React from 'react';
import {Box, Grid, Text} from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';
import PoolsList from './components/pools-list/PoolsList';
import {ConnectWalletButton} from "../../layout/components/ConnectWalletButton";

export const Pools = () => {
  return (
    <Box>
      <HtmlMeta title="Pools" />
      <Box as="section">
        <Grid templateColumns="1fr auto" gap="32px" alignItems="center" mb="40px">
          <Box>
            <Text as="h1" mb="24px">
              Pools
            </Text>
          </Box>
          <ConnectWalletButton />
        </Grid>
        <PoolsList />
      </Box>
    </Box>
  );
};
