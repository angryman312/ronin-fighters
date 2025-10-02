import { useEffect, useState } from "react";
import {
  ChainIds,
  ConnectorError,
  ConnectorErrorType,
  requestRoninWalletConnector,
} from "@sky-mavis/tanto-connect";

const ConnectRoninWalletButton = (props) => {
  const [connector, setConnector] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState();
  const [error, setError] = useState(null);

  const [userAddresses, setUserAddresses] = useState();
  const [currentChainId, setCurrentChainId] = useState(null);

  const switchChain = async (chainId) => {
    try {
      await connector?.switchChain(chainId);
      setCurrentChainId(chainId);
    } catch (error) {
      console.error(error);
    }
  };

  const getRoninWalletConnector = async () => {
    try {
      const connector = await requestRoninWalletConnector();

      return connector;
    } catch (error) {
      if (error instanceof ConnectorError) {
        setError(error.name);
      }

      return null;
    }
  };

  const connectRoninWallet = async () => {
    if (!connector && error === ConnectorErrorType.PROVIDER_NOT_FOUND) {
      window.open("https://wallet.roninchain.com", "_blank");
      return;
    }

    const connectResult = await connector?.connect();

    if (connectResult) {
      setConnectedAddress(connectResult.account);
      setCurrentChainId(connectResult.chainId);
    }

    const accounts = await connector?.getAccounts();

    if (accounts) {
      setUserAddresses(accounts);
    }
  };

  useEffect(() => {
    getRoninWalletConnector().then((connector) => {
      setConnector(connector);
    });
  }, []);

  const formatConnectedChain = (chainId) => {
    switch (chainId) {
      case ChainIds.RoninMainnet:
        return `Ronin Mainnet - ${chainId}`;
      case ChainIds.RoninTestnet:
        return `Saigon Testnet - ${chainId}`;
      default:
        return `Unknown Chain - ${chainId}`;
    }
  };

  return (
    <>
      <button className="connectBtn" onClick={connectRoninWallet}>
        {connectedAddress
          ? connectedAddress.substring(0, 4) +
            "..." +
            connectedAddress.substring(connectedAddress.length - 4)
          : "Connect"}
      </button>
    </>
  );
};

export default ConnectRoninWalletButton;
