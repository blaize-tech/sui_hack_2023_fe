import {UnorderedList} from "@chakra-ui/react";
import PoolsListItem from "./PoolsListItem";
// import blockChainCore from "@utils/blockchain";
import React from 'react';

const PoolsList: React.FC = () => {
    // const poolsList = blockChainCore.getSwap() ? blockChainCore.getSwap().getPoolsInfos() : [];
    // console.log("poolsList", poolsList);
    //
    const poolItems = [];
    // poolsList.forEach(poolInfo => {
    //     // @ts-ignore
    //     poolItems.push(<PoolsListItem key={poolInfo.AssetName} poolInfo={poolInfo}/>)
    // });
    return (
        <UnorderedList styleType="none" w="100%" h="600px" m="0">
            {poolItems}
        </UnorderedList>
    );
};

export default PoolsList;
