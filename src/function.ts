import {ethers} from "ethers"
import { StateType } from "./type.t";

declare global {
    interface Window {
        ethereum: any
    }
  }

const ethersSimpleTestStarting = async ({contractAddres,contractABI}:{contractAddres:string,contractABI:any}) => {
    try{
        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        return {provider,signer,contract,account}
      }catch(error){
        console.log(error)
        return false
      }
}

const sendMessage =  async ({state,name,message,amountVal}:{state:StateType;name:string;message:string;amountVal:string}) => {
    try {
        const {contract}=state;
        const amount = {value:ethers.utils.parseEther(amountVal)}
        const transaction = await contract.buyChai(name,message,amount)
        await transaction.wait();

        return true
    } catch (error) {
        console.log(error)
        return false
    }

}


const memosMessage = async({state}:{state:StateType;})=>{
    try {
        const {contract}=state;
        const memos = await contract.getMemos();
        return memos
    } catch (error) {
        console.log(error)
        return false
    }
}

export default ethersSimpleTestStarting
export {memosMessage,sendMessage}