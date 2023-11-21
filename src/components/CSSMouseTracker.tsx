import { useRef, useEffect } from 'react'

// CSS mouse tracker
export default function CSSMouseTracker(props: { className: string, children: React.ReactNode}) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current!.addEventListener('mousemove', function (event: MouseEvent) {
      this.style.setProperty('--x-offset', event.offsetX + 'px');
      this.style.setProperty('--y-offset', event.offsetY + 'px');
    });
    ref.current!.addEventListener('mouseleave', function () {
      this.style.setProperty('--x-offset', '-1000px');
      this.style.setProperty('--y-offset', '-1000px');
    });
  }, []);

  return (<div className={'mouse-tracker ' + props.className} ref={ref}>{props.children}</div>)
}
