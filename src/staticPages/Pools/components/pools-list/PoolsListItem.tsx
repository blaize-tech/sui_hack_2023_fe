import { Flex, Center, Text, ListItem } from "@chakra-ui/react";
import { AptCoin, DownIcon } from "@look/components/Icons";

const PoolsListItem: React.FC = (props: {// @ts-ignore
  poolInfo: poolInfo}) => {
  const {
    AssetName,
    Earned,
    Liquidity,
    APR,
    Multiplier,
    Available,
    Staked,
    Fee
  } = props.poolInfo;

  return (
    <ListItem
      color="#777D99"
      bg="rgba(29, 39, 71, 0.4)"
      borderRadius="24px"
      h="104px"
      mb="20px"
    >
      <Flex h="100%" w="100%" justifyContent="space-evenly">
        <Flex alignItems="center" w="270px" gap="16px">
          <AptCoin />
          <Text
            fontFamily="orbitron"
            fontWeight="900"
            fontSize="13px"
            lineHeight="16.3px"
            color="#E1E6FB"
          >
            {AssetName}
          </Text>
          <Center
            color="#B692F6"
            border="1px solid #B692F6"
            borderRadius="32px"
            p="4px 8px 4px 8px"
          >
            <Text
              fontWeight="700"
              fontSize="10px"
              lineHeight="15px"
            >
              {Fee}%
            </Text>
          </Center>

          <Center
            color="#32D583"
            border="1px solid #32D583"
            borderRadius="32px"
            p="4px 8px 4px 8px"
          >
            <Text
              fontWeight="700"
              fontSize="10px"
              lineHeight="15px"
            >
              boosted
            </Text>
          </Center>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="10px" fontWeight="700">Earned</Text>
          <Text fontSize="14px">{Earned}</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="10px" fontWeight="700">Liquidity</Text>
          <Text fontSize="14px">${Liquidity}</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="10px" fontWeight="700">APR</Text>
          <Text fontSize="14px" color="#32D583">
            {APR}%
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="10px" fontWeight="700">Multiplier</Text>
          <Text fontSize="14px">{Multiplier}</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="10px" fontWeight="700">Available</Text>
          <Text fontSize="14px">{Available} LP</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="10px" fontWeight="700">Staked</Text>
          <Text fontSize="14px">{Staked} LP</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/*<MenyIcon />*/}
          <DownIcon />
        </Flex>
      </Flex>
    </ListItem>
  );
};

export default PoolsListItem;
