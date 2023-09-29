import { useEffect, useState } from 'react';

type ImagesType = string[];

const useImagePreloader = (images: ImagesType) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          });
        }));
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    loadImages();
  }, [images]);

  return isLoading;
};

export default useImagePreloader;
