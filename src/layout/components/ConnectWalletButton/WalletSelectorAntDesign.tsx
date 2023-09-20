import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import { useEffect, useState } from "react";

const WalletSelectorAntDesign = () => {
  const { currentAccount } = useWalletKit();
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (currentAccount?.address) {
      let tempAddr = currentAccount?.address;
      setAddress(tempAddr.slice(0, 4) + "..." + tempAddr.slice(-4));
    }
  }, [currentAccount]);

  return <div>
    <ConnectButton
      connectedText={address}
      connectText={"Connect Wallet"}
      className="connect-btn px-12 md:px-15 py-5 md:py-12 text-12 md:text-15 rounded-md cursor-pointer"
    />
  </div>

};

export default WalletSelectorAntDesign;
