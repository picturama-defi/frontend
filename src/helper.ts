export const convertToB64 = (file: any) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    console.log("Inside convertB64 function: ", file);
    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
};

export const extractVimeoId = (link: string) => {
  return link.split("/")[link.split("/").length - 1];
};
