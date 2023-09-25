const getImageMeta = (url: string, cb: (val: HTMLImageElement) => void) => {
  const img = new Image();
  img.onload = () => cb(img);
  img.onerror = (err) => {
    throw err;
  };
  img.src = url;
};

export const debounce = (cb: () => void, delay = 300) => {
  let timer: ReturnType<typeof setTimeout> | null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      cb();
      timer = null;
    }, delay);
  };
};
