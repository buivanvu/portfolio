import { useEffect } from "react";
import { useScrollData } from "./ScrollData";

export const ScrollManager = () => {
  const scrollData = useScrollData();
  const scrollHandler =  () => {
    scrollData.scrollTop = document.documentElement.scrollTop;
    scrollData.offset = scrollData.scrollTop / scrollData.scrollSize;
  }

  useEffect(() => {
    const scrollSize = (document.body.scrollHeight - window.innerHeight);
    scrollData.scrollSize = scrollSize;
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  })
};
