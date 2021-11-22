import { create } from "ipfs-http-client";

export const addToIPFS = async (file: any, path: string) => {
  const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });
  const added = await client.add(file);
  return `https://ipfs.infura.io/ipfs/${added.path}`;
};
