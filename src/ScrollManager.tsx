import { useEffect, createContext, useState } from "react";
import { useScrollData } from "./UseScrollData";

export const ScrollContext = createContext(null);

export const ScrollManager = (props) => {
  const scrollData = useScrollData();
  const [scrollState, setScrollState] = useState({ page: 0 });

  const scrollHandler =  () => {
    scrollData.scrollTop = document.documentElement.scrollTop;
    scrollData.offset = scrollData.scrollTop / scrollData.scrollSize;
    
    // Adjust screen color based on scroll position
    const brightness = 255 * (1 - Math.min(scrollData.offset * 5, 1));
    document.body.style.background = `rgb(${brightness}, ${brightness}, ${brightness})`;
    console.log(scrollData.offset);
    if (scrollData.offset > 0.5) {
      setScrollState({ page: 1 });
    }
  }

  useEffect(() => {
    const scrollSize = (document.body.scrollHeight - window.innerHeight);
    scrollData.scrollSize = scrollSize;
    window.addEventListener('scroll', scrollHandler);

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
