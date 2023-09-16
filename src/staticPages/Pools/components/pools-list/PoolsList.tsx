import {UnorderedList} from "@chakra-ui/react";
import PoolsListItem from "./PoolsListItem";
import React from 'react';

const PoolsList: React.FC = () => {
    const poolsList = [];
    console.log("poolsList", poolsList);
    //
    const poolItems = [];
    poolsList.forEach(poolInfo => {
        // @ts-ignore
        poolItems.push(<PoolsListItem key={poolInfo.AssetName} poolInfo={poolInfo}/>)
    });
    return (
        <UnorderedList styleType="none" w="100%" h="600px" m="0">
            {poolItems}
        </UnorderedList>
    );
};

export default PoolsList;
