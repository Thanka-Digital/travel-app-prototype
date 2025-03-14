export const imageTobase64 = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  let images: PostImage[] = [];
  if (files) {
    const fileArray = Array.from(files);
    const promises = fileArray.map((file) => {
      return new Promise<PostImage>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve({ id: Date.now(), base64: reader.result as string });
        };
        reader.onerror = reject;
      });
    });

    await Promise.all(promises).then((newImages) => {
      images = [...images, ...newImages];
    });
  }

  return images;
};
