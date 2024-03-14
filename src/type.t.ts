import {ethers} from "ethers"

interface StateType{
    provider: ethers.providers.Web3Provider | null;
    signer:ethers.providers.JsonRpcSigner | null;
    contract:ethers.Contract;
}

interface StateTypeFun{
  provider: ethers.providers.Web3Provider | null;
  signer:ethers.providers.JsonRpcSigner | null;
  contract:ethers.Contract | null | any;
  account:string;
}

interface MemosType{
    name:string;
    timestamp:number;
    message:string;
    from:string;
  }

export type {StateType,MemosType,StateTypeFun}