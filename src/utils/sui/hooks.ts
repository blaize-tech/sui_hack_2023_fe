import { TransactionBlock } from '@mysten/sui.js';
import { LAMPORT, OBJECT_RECORD } from '../'
import { useEffect, useState } from 'react';
import { Connection, JsonRpcProvider } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';

const getProvider = () => {
	return new JsonRpcProvider(
		new Connection({
			fullnode: 'https://wallet-rpc.devnet.sui.io/',
			websocket: 'wss://fullnode.devnet.sui.io:443',
			faucet: 'https://faucet.devnet.sui.io/gas',
		}))
}

export const useGetBalance = (account: string, actionCount: number) => {
	const [data, setAccountBalance] = useState<string>('0');

	useEffect(() => {
		const getbalance = async () => {
			if (account === OBJECT_RECORD.AddressZero)
				setAccountBalance('0');
			else {
				const provider = getProvider();
				let accountBalance = await provider.getBalance({ owner: account });
				let balanceValue = BigNumber(accountBalance?.totalBalance).dividedBy(LAMPORT).toFixed(3) || '0'
				setAccountBalance(balanceValue);
			}
		}
		getbalance();
	}, [account, actionCount])
	return data;
}

export const useStakingMethods = () => {
	const { signAndExecuteTransactionBlock } = useWalletKit();

	const staking = async (amount) => {
		const txb = new TransactionBlock();
		const [coin] = txb.splitCoins(txb.gas, [txb.pure(amount)]);
		const packageObjectId = OBJECT_RECORD.PACKAGE_ID;
		txb.moveCall({
			target: `${packageObjectId}::interface::stake`,
			arguments: [
				txb.object(OBJECT_RECORD.PZH_STORAGE),
				txb.object(OBJECT_RECORD.PZH_BALANCE),
				txb.object(OBJECT_RECORD.PZH_ACCOUNT_STORAGE),
				txb.object(OBJECT_RECORD.IPX_STORAGE),
				txb.object(OBJECT_RECORD.CLOCK_OBJECT),
				coin,
			],
			typeArguments: [],
		});
		txb.setGasBudget(300000000);
		
		const tx = await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});
		return tx;
	};

	const unstaking = async (amount) => {
		const txb = new TransactionBlock();
		console.log('Starting Staking');
		txb.moveCall({
			target: `${OBJECT_RECORD.PACKAGE_ID}::interface::unstake`,
			arguments: [
				txb.object(OBJECT_RECORD.PZH_STORAGE),
				txb.object(OBJECT_RECORD.PZH_BALANCE),
				txb.object(OBJECT_RECORD.PZH_ACCOUNT_STORAGE),
				txb.object(OBJECT_RECORD.IPX_STORAGE),
				txb.object(OBJECT_RECORD.CLOCK_OBJECT),
				txb.pure(amount),
			],
			typeArguments: [],
		});

		txb.setGasBudget(300000000);
		const tx = await signAndExecuteTransactionBlock({
			transactionBlock: txb,
			requestType: 'WaitForEffectsCert',
			options: { showEffects: true },
		});
		return tx;
	};
	return { staking, unstaking };
}
