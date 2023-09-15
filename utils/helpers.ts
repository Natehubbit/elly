const getImageMeta = (url: string, cb: (val: HTMLImageElement) => void) => {
  const img = new Image();
  img.onload = () => cb(img);
  img.onerror = (err) => {
    throw err;
  };
  img.src = url;
};
