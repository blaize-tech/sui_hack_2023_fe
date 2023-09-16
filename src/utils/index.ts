// Basic app settings
export const APP_SEO_TITLE: string = 'Phizen';
export const APP_SEO_DESCRIPTION: string = 'Phizen yield protocol';
export const APP_DOMAIN_URL: string = 'http://localhost:3000/';

//SUI config
export const OBJECT_RECORD = {
  PACKAGE_ID: '0x65c197c2f67e18472b0a6b213a6dab002dec692171eefa7690e980486f8ec9a1',
  PZH_ACCOUNT_STORAGE: '',
  PZH_STORAGE: '',
  PZH_ADMIN: '',
  IPXADMIN_CAP: '',
  IPX_STORAGE: '',
  PUBLISHER: '',
  PZH_BALANCE: '',
  AddressZero: '0x0000000000000000000000000000000000000000000000000000000000000000',
  CLOCK_OBJECT: '0x0000000000000000000000000000000000000000000000000000000000000006',
  COIN_SUI: "0x2::sui::SUI"
};

export const LAMPORT = 1000000000;


//SUI utils
import BigNumber from 'bignumber.js';
export const parseSuiRawDataToFarms = (
  x: ReadonlyArray<ReadonlyArray<BigInt>>
) =>
  x.map((elem: ReadonlyArray<BigInt>) => ({
    allocationPoints: BigNumber(elem[0].toString()),
    totalStakedAmount: BigNumber(elem[1].toString()),
    accountBalance: BigNumber(elem[2].toString()),
  }));

export const convertTimestampToDateFormat = (timestamp) => {
  if (timestamp) {
    const dateTimeStr = new Date(parseInt(timestamp)).toLocaleDateString("en-CA")
    return dateTimeStr;
  } else {
    return "";
  }
}


export const limitDecimalsWithoutRounding = (val, decimals) => {
  let parts = val.toString().split(".");
  return parseFloat(parts[0] + "." + parts[1].substring(0, decimals));
}