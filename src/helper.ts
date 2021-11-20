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
