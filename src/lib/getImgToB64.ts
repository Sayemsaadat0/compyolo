export const getImgToB64 = (file: any): Promise<String> =>
  new Promise<String>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(`Error : ${error}`);
  });
