import { CONTRACT_ADDRESS } from "../../config"
import Abi from "./artifact.json";
import { ethers } from "ethers";

export const getFilmData = async (id: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const ramaContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Abi.abi,
        provider
    );
    const res = await ramaContract.getFundOfUserOnAProject(ethers.utils.formatBytes32String(id))
    const details = {
        amountFundedSoFar: res["amountFundedSoFar"].toString(),
        targetFund: res["targetFund"].toString(),
        userFund: res["userFund"].toString(),
        yieldGenerated: res["yieldGenerated"].toString()
    }
    return details
}