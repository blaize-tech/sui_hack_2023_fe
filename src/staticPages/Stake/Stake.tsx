import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { HtmlMeta } from '@look/components';
import { Tab, TabList } from '@look/components/Tabs';
import { AptCoin } from '@look/components/Icons';
import { ConnectWalletButton } from '../../layout/components/ConnectWalletButton';
import { PRECISION, PRICE } from '@utils/sui/const';
import { useStore } from "@utils/store";
import { useGetBalance, useStakingMethods } from '@utils/sui/hooks';
import { useWalletKit } from '@mysten/wallet-kit';
import { OBJECT_RECORD } from '@utils/index';

export const Stake = () => {
  const { currentAccount } = useWalletKit();
  const { staking, unstaking } = useStakingMethods();

  const { onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTabChange = (newActive: number) => setActiveTab(newActive);

  const store = useStore();
  // sui balance
  const suiBalance = useGetBalance(currentAccount?.address || OBJECT_RECORD.AddressZero, 0);

  const phSUIBalance = store.state.balances["phSUI"] || "0";

  const onChaneStakeAmount = (val) => {
    setStakeAmount(val.target.value);
  };

  const onChaneWithdrawAmount = (val) => {
    setWithdrawAmount(val.target.value);
  };

  const handleStake = async (amount: number) => {
    let tx = await staking(amount || 0);
    console.log(tx);
  };

  const handleUnstake = async (amount: number) => {
    let tx = await unstaking(amount || 0);
    console.log(tx);
  };

  return (
    <Box>
      <HtmlMeta title="Stake" />
      <Box as="section">
        <Grid templateColumns="1fr auto" gap="32px" alignItems="center" mb="40px">
          <Box>
            <Text as="h1" mb="24px">
              Stake
            </Text>
          </Box>
          <ConnectWalletButton />
        </Grid>
        <Box maxW="480px" m="0 auto">
          <TabList active={activeTab} onChange={handleTabChange}>
            <Tab title="Bond">
              <Box>
                {/*< ----- >*/}
                <Box
                  borderRadius="24px 24px 48px 48px"
                  p="32px"
                  bgColor="blue.darkLight"
                  mb="2px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text >${(PRICE * stakeAmount).toFixed(2)}</Text>
                    {/* <Text>Balance: {suiBalance/PRECISION}</Text> */}
                    <Text>Balance: {suiBalance}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={stakeAmount}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        onChange={onChaneStakeAmount}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="8px">
                      <AptCoin />
                      SUI
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                <Box
                  borderRadius="48px 48px 24px 24px"
                  p="32px"
                  bgColor="blue.darkLight"
                  mb="32px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>${(PRICE * stakeAmount).toFixed(2)}</Text>
                    <Text>Balance: {phSUIBalance / PRECISION}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={stakeAmount}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        onChange={onChaneStakeAmount}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="8px">
                      <AptCoin />
                      phSUI
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                {/*<Select*/}
                {/*  placeholder="Select Validator"*/}
                {/*  bgColor="blue.darkLight"*/}
                {/*  h="64px"*/}
                {/*  border={0}*/}
                {/*  borderRadius="20px"*/}
                {/*  fontWeight={500}*/}
                {/*  color="gray"*/}
                {/*  mb="32px"*/}
                {/*>*/}
                {/*  <option value="option1">Option 1</option>*/}
                {/*  <option value="option2">Option 2</option>*/}
                {/*  <option value="option3">Option 3</option>*/}
                {/*</Select>*/}
                <Grid
                  templateColumns="1fr auto"
                  gap="24px"
                  fontSize="14px"
                  fontWeight={700}
                  mb="41px"
                >
                  <GridItem>
                    <Text color="gray">phSUI to SUI Rate</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>1 phSUI = 1.0001 SUI</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">phSUI MCap</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$5,379,388,167</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">SUI in Vault</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>{92440.793 + phSUIBalance / PRECISION}</Text>
                  </GridItem>
                </Grid>
                <Flex justifyContent="center">
                  {/* <Button onClick={stakeSUI}>Accept and Bond</Button> */}
                  <Button onClick={handleStake.bind(null, 10000000)}>Accept and Bond</Button>
                </Flex>
                {/*< ----- >*/}
              </Box>
            </Tab>
            <Tab title="Redeem">
              <Box>
                <Box
                  borderRadius="24px 24px 48px 48px"
                  p="32px"
                  bgColor="blue.darkLight"
                  mb="2px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>${(PRICE * withdrawAmount).toFixed(2)}</Text>
                    <Text>Balance: {phSUIBalance / PRECISION}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={withdrawAmount}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        onChange={onChaneWithdrawAmount}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="8px">
                      <AptCoin />
                      phSUI
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                <Box
                  borderRadius="48px 48px 24px 24px"
                  p="32px"
                  bgColor="blue.darkLight"
                  mb="32px"
                >
                  <Flex
                    justifyContent="space-between"
                    fontWeight={700}
                    fontSize="12px"
                    letterSpacing="0.36px"
                    mb="12px"
                    color="gray"
                  >
                    <Text>${(PRICE * withdrawAmount).toFixed(2)}</Text>
                    {/* <Text>Balance: {suiBalance/PRECISION}</Text> */}
                    <Text>Balance: {suiBalance}</Text>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    fontFamily="orbitron"
                    fontSize="22px"
                    fontWeight={900}
                  >
                    <NumberInput defaultValue={0} precision={2} value={withdrawAmount}>
                      <NumberInputField
                        p={0}
                        border={0}
                        outline="none"
                        h="auto"
                        boxShadow="none"
                        fontFamily="orbitron"
                        fontSize="22px"
                        fontWeight={900}
                        placeholder="0.00"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        onChange={onChaneWithdrawAmount}
                      />
                    </NumberInput>
                    <Flex alignItems="center" gap="8px">
                      <AptCoin />
                      SUI
                    </Flex>
                  </Flex>
                </Box>
                {/*< ----- >*/}
                {/*< ----- >*/}
                {/*< ----- >*/}
                {/*<Select*/}
                {/*  placeholder="Select Validator"*/}
                {/*  bgColor="blue.darkLight"*/}
                {/*  h="64px"*/}
                {/*  border={0}*/}
                {/*  borderRadius="20px"*/}
                {/*  fontWeight={500}*/}
                {/*  color="gray"*/}
                {/*  mb="32px"*/}
                {/*>*/}
                {/*  <option value="option1">Option 1</option>*/}
                {/*  <option value="option2">Option 2</option>*/}
                {/*  <option value="option3">Option 3</option>*/}
                {/*</Select>*/}
                <Grid
                  templateColumns="1fr auto"
                  gap="24px"
                  fontSize="14px"
                  fontWeight={700}
                  mb="41px"
                >
                  <GridItem>
                    <Text color="gray">phSUI to SUI Rate</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>1 phSUI = 1.0001 SUI</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">phSUI MCap</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>$5,379,388,167</Text>
                  </GridItem>
                  <GridItem>
                    <Text color="gray">SUI in Vault</Text>
                  </GridItem>
                  <GridItem textAlign="right">
                    <Text>{92440.793 + phSUIBalance / PRECISION}</Text>
                  </GridItem>
                </Grid>
                <Flex justifyContent="center">
                  <Button onClick={handleUnstake.bind(null, 10000000)}>Accept and Redeem</Button>
                </Flex>
                {/*< ----- >*/}
              </Box>
            </Tab>
          </TabList>
        </Box>
      </Box>
      <Modal isOpen={isLoading} onClose={onClose} closeOnOverlayClick={false} isCentered>
        <ModalOverlay />
        <ModalContent bg="blue.dark" maxW="100%" w={600}>
          <ModalBody textAlign="center" py="40px" w={600}>

            <Text textAlign="center" fontFamily="orbitron"
              fontSize="24px" opacity="0.6"
              fontWeight={900}>Waiting for finalization ...</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
