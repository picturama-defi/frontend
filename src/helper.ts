import JSZip from "jszip";
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

export const base64ToBuffer = (str: any) => {
  str = window.atob(str); // creates a ASCII string
  var buffer = new ArrayBuffer(str.length),
    view = new Uint8Array(buffer);
  for (var i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i);
  }
  return buffer;
};

export const base64ToZip = (str: any) => {
  var buffer = base64ToBuffer(str);
  var zip = new JSZip(buffer);
  // var fileContent = zip.file("someFileInZip.txt").asText();
  return zip;
};
