import AnimatedText from "../components/AnimatedText";

export default function About() {
  return (
    <div className="h-[95vh] lg:h-[80vh] lg:min-h-[600px] flex flex-wrap flex-col-reverse md:flex-row justify-end md:justify-center">
      <div className="p-5 lg:p-0 flex xl:w-2/3 w-full flex-col justify-center">
          <AnimatedText playOnce duration={.4} className="font-bold text-2xl tracking-tighter text-secondary w-fit">Hi, I am</AnimatedText>
          <AnimatedText playOnce delay={0.4} duration={1}
            className="mouse-tracker text-7xl md:text-8xl lg:text-9xl txt-name font-bold tracking-tighter bg-clip-text w-fit !leading-relaxed "
          >
            Bùi Văn Vũ
          </AnimatedText>
          <AnimatedText playOnce delay={1} className="text-2xl md:text-3xl font-bold tracking-tight text-secondary w-fit">Fullstack Web Developer</AnimatedText>
          <AnimatedText playOnce delay={1.5} className="text-2xl md:text-3xl font-bold tracking-tight text-secondary w-fit">Based in Viet Nam</AnimatedText>
      </div>
      <div className="wf-full sm:w-full xl:w-1/3 w-full flex flex-col justify-center items-center">
        <div className="relative p-5 w-1/2 md:w-full">
          <img className="rounded-full" src='/avt.jpg' />
        </div>
      </div>
    </div>
  );
}