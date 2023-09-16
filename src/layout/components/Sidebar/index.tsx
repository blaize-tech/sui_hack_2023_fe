import Link from 'next/link';
import { Box, Grid, Image, HStack } from '@chakra-ui/react';
import { Navigation } from '@look/components';
import { Twitter, Linkedin, Discord, GitHub } from '@look/components/Icons';

const Sidebar = () => {
  return (
    <Box as="aside" p="104px 40px" w="200px">
      <Grid templateRows="auto 1fr auto" gap="90px" h="100%">
        <Link href={'/'} passHref>
          <Image src="/assets/images/Logo.png" h="16px" w="92px" alt="Phizen" />
        </Link>
        <Navigation />
        <HStack spacing="18px">
          <Link href="#">
            <Twitter />
          </Link>
          <Link href="#">
            <Linkedin />
          </Link>
          <Link href="#">
            <Discord />
          </Link>
          <Link href="#">
            <GitHub />
          </Link>
        </HStack>
      </Grid>
    </Box>
  );
};

export default Sidebar;
