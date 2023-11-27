import { useEffect, createContext, useState } from "react";
import { useScrollData } from "./UseScrollData";

export const ScrollContext = createContext(null);

export const ScrollManager = (props: { children: React.ReactNode}) => {
  const scrollData = useScrollData();
  const [scrollState, setScrollState] = useState(0);

  const scrollHandler =  () => {
    scrollData.scrollTop = document.documentElement.scrollTop;
    scrollData.offset = scrollData.scrollTop / scrollData.scrollSize;
    
    // Adjust screen color based on scroll position
    const brightness = 255 * (1 - Math.min(scrollData.offset * 5, 1));
    document.body.style.setProperty('--background', `rgb(${brightness}, ${brightness}, ${brightness})`);
    setScrollState(Number(scrollData.offset.toFixed(2)));
  }

  useEffect(() => {
    const scrollSize = (document.body.scrollHeight - window.innerHeight);
    scrollData.scrollSize = scrollSize;
    window.addEventListener('scroll', scrollHandler);
    
    scrollHandler();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  })
  return (
    <ScrollContext.Provider value={scrollState}>
      {props.children}
    </ScrollContext.Provider>
  );
};
