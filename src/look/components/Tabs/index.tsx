import React, { ReactNode, FC, Children } from 'react';
import { Box, Flex, HStack, ButtonProps } from '@chakra-ui/react';
import { TabsDivider } from '@look/components/Icons';

interface TabsProps {
  active: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (index: number) => void;
  children: ReactNode;
}

interface TabProps {
  title?: string;
  children: ReactNode;
}

export const Tab: FC<TabProps> = ({ title, children }) => <Box data-title={title}>{children}</Box>;

export const TabList: FC<TabsProps> = ({ active, onChange, children }) => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" mb="30px">
        <HStack
          divider={
            <Flex alignItems="center" justifyContent="center" px="28px" border={0}>
              <TabsDivider />
            </Flex>
          }
          alignItems="center"
        >
          {Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              const buttonProps: ButtonProps = {
                onClick: () => onChange(index),
                color: active === index ? '#599CFF' : 'white',
                fontSize: '34px',
                fontWeight: '900',
                fontFamily: 'orbitron',
                position: 'relative',
                pb: '20px',
                _after: {
                  position: 'absolute',
                  opacity: active === index ? 1 : 0,
                  bottom: 0,
                  left: 0,
                  content:
                    // eslint-disable-next-line max-len
                    "url(\"data:image/svg+xml,%3Csvg width='332' height='3' viewBox='0 0 332 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' width='64' height='3' rx='1' fill='%23E1E6FB'/%3E%3Crect x='68.5' width='8' height='3' rx='1' fill='%23E1E6FB'/%3E%3C/svg%3E%0A\")",
                },
              };

              return (
                <Box as="button" key={`tabList-tab-${index}`} {...buttonProps}>
                  {(child as React.ReactElement<TabProps>).props.title}
                </Box>
              );
            }

            return null;
          })}
        </HStack>
      </Flex>
      <Box>{children && (children as React.ReactElement<TabProps>[])[active]}</Box>
    </Box>
  );
};
