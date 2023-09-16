import React, { useEffect } from 'react';
import dynamic from "next/dynamic";

const WalletSelectorAntDesign = dynamic(
    () => import(".//WalletSelectorAntDesign"),
    {
      suspense: false,
      ssr: false,
    }
);

export const ConnectWalletButton = () => {
  return <WalletSelectorAntDesign/>;
};
