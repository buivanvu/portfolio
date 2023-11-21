import CSSMouseTracker from "../components/CSSMouseTracker"

export default function About() {
  return (
    <div className="h-[80vh] xl:min-h-[600px] flex flex-row">
      <div className="flex w-2/3 flex-col justify-center">
          <div className="font-bold text-2xl tracking-tighter text-secondary">Hi, I am</div>
          <CSSMouseTracker className="mouse-tracker txt-name font-bold tracking-tighter bg-clip-text text-transparent">Bui Van <span className="">Vu</span></CSSMouseTracker>
          <div className="text-3xl font-bold tracking-tight text-secondary">Fullstack Web Developer</div>
          <div className="text-3xl font-bold tracking-tight text-secondary">Based in Viet Nam</div>
      </div>
      <div className="w-1/3 flex flex-col justify-center">
        <div className="relative p-5">
          <img className="rounded-full" src='/avt.jpg' />
        </div>
      </div>
    </div>
  );
}