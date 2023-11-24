import { useEffect } from 'react'

// CSS mouse tracking coordinate of mouse position then passed to css variable
export default function useCSSMouseTracker(ref: React.RefObject<HTMLElement>) {

  useEffect(() => {
    ref.current!.addEventListener('mousemove', function (event: MouseEvent) {
      this.style.setProperty('--x-offset', event.offsetX + 'px');
      this.style.setProperty('--y-offset', event.offsetY + 'px');
    });
    ref.current!.addEventListener('mouseleave', function () {
      this.style.setProperty('--x-offset', '-1000px');
      this.style.setProperty('--y-offset', '-1000px');
    });
  });
}
