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

    let userFundDetails, projectFundDetails
    try {
        const res = await ramaContract.getProjectFundDetails(ethers.utils.formatBytes32String(id))
        console.log(res)
        projectFundDetails = {
            amountFundedSoFar: res["fundedSoFar"].toString(),
            targetFund: res["targetFund"].toString(),
        }
    } catch (err) {
        console.log(err);
    }

    try {
        userFundDetails = await ramaContract.connect(signer).getFundOfUserOnAProject(ethers.utils.formatBytes32String(id))
    } catch (err) {
        userFundDetails = {
            userFund: 0,
            yieldGenerated: 0
        }
    }

    return {
        ...projectFundDetails,
        ...userFundDetails
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