import {ethers} from "ethers"

interface StateType{
    provider: ethers.providers.Web3Provider | null;
    signer:ethers.providers.JsonRpcSigner | null;
    contract:ethers.Contract;
}
interface MemosType{
    name:string;
    timestamp:number;
    message:string;
    from:string;
  }

export type {StateType,MemosType}