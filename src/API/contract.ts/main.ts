import { CONTRACT_ADDRESS } from "../../config"
import Abi from "./artifact.json";

import { ethers } from "ethers";

export const getFilmData = async (id: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner()

    const ramaContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Abi.abi,
        provider
    );

    try {
        const res = await ramaContract.connect(signer).getFundOfUserOnAProject(ethers.utils.formatBytes32String(id))
        return {
            amountFundedSoFar: res["amountFundedSoFar"].toString(),
            targetFund: res["targetFund"].toString(),
            userFund: res["userFund"].toString(),
            yieldGenerated: res["yieldGenerated"].toString()
        }
    } catch (err) {
        return null
    }




}

export const fundProject = async (id: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const ramaContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Abi.abi,
        provider
    );
    const value = window.prompt("Enter amount");

    if (!Number(value)) {
        return;
    }

    const txn = await ramaContract.connect(signer).fundProject(ethers.utils.formatBytes32String(id), {
        value
    })

    await txn.wait()

    return;
}