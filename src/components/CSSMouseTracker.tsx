import { useRef } from 'react'
import useCSSMouseTracker from './UseCSSMouseTracker';

// CSS mouse tracker
export default function CSSMouseTracker(props: { className: string, children: React.ReactNode}) {

  const ref = useRef<HTMLDivElement>(null);
  useCSSMouseTracker(ref);

  return (<div className={'mouse-tracker ' + props.className} ref={ref}>{props.children}</div>)
}
