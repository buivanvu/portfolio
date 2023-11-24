import { useRef } from 'react';
import { motion } from "framer-motion";
import useCSSMouseTracker from './UseCSSMouseTracker';

interface IProps {
  duration?: number,
  delay?: number,
  className?: string,
  playOnce?: boolean,
  children: React.ReactNode
}

// CSS mouse tracker
export default function AnimatedText(props: IProps) {
  const ref = useRef<HTMLDivElement>(null);

  useCSSMouseTracker(ref);

  return (
    <motion.div
      ref={ref}
      initial={{
        backgroundSize: '0%',
      }}
      viewport={{ once: !!props.playOnce }}
      whileInView={{
        backgroundSize: '100%',
        transition: {
          duration: props.duration || .75,
          delay: props.delay || 0,
        },
      }}
      className={'mouse-tracker bg-clip-text ' + (props.className || '')}>{props.children}
    </motion.div>)
}
