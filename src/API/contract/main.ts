import { CONTRACT_ADDRESS, RAMA_TOKEN_ADDRESS } from "../../config"
import Abi from "./artifact.json";
import RamaAbi from "./ramaTokenArtifact.json";

import { ethers } from "ethers";


export const getRawFilmData = async (id: string) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const ramaContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Abi.abi,
        provider
    );

    let projectFundDetails;

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

    return projectFundDetails;
}

export const getUserFundedFilmIds = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner()

    const ramaContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Abi.abi,
        provider
    );
    try {
        const res = await ramaContract.connect(signer).getUserFundedProjects()
        return res.map((item: any) => ethers.utils.parseBytes32String(item)).filter((item: any) => item !== "0")
    } catch (err) {
        console.log(err)
    }

    return []
}

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
        projectFundDetails = {
            amountFundedSoFar: ethers.utils.formatUnits(res["fundedSoFar"]),
            targetFund: ethers.utils.formatUnits(res["targetFund"].toString()),
        }
    } catch (err) {
        console.log(err);
    }

    try {
        const res = await ramaContract.connect(signer).getFundOfUserOnAProject(ethers.utils.formatBytes32String(id))
        console.log("sdadas")
        console.log(res["claimableYield"])
        userFundDetails = {
            userFund: ethers.utils.formatUnits(res["userFund"]),
            claimableYield: ethers.utils.formatUnits(res["claimableYield"])
        }
    } catch (err) {
        userFundDetails = {
            userFund: 0,
            claimableYield: 0
        }
    }

    return {
        ...projectFundDetails,
        ...userFundDetails,
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
        //@ts-ignore
        value: ethers.utils.parseEther(value)
    })

    await txn.wait()

    return;
}

export const claim = async (id: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const ramaContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        Abi.abi,
        provider
    );

    const txn = await ramaContract.connect(signer).claimProjectRewards(ethers.utils.formatBytes32String(id))

    await txn.wait()

    return;
}

export const getRamaBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const ramaToken = new ethers.Contract(
        RAMA_TOKEN_ADDRESS,
        RamaAbi.abi,
        provider
    );
    const address = signer.getAddress()
    const balance = await ramaToken.connect(signer).balanceOf(address);
    return ethers.utils.formatUnits(balance)
}