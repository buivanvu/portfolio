
export default function About() {
  return (
    <div className="flex flex-row">
      <div className="flex w-2/3 flex-col justify-center">
          <div className="hero-text font-bold text-2xl tracking-tighter">Hi, I am</div>
          <div className="hero-text text-8xl font-bold tracking-tighter">Bui Van <span>Vu</span></div>
          <div className="hero-text text-3xl font-bold tracking-tight">Fullstack Web Developer</div>
          <div className="hero-text text-3xl font-bold tracking-tight">Based in Viet Nam</div>
      </div>
      <div className="w-1/3">
        <div className="relative">
          <img className="rounded-full w-3/4" src='/avt.jpg' />
        </div>
      </div>
    </div>
  );
}