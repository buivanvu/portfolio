import AnimatedText from "../components/AnimatedText";

export default function About() {
  return (
    <div className="h-[90vh] lg:h-[90vh] flex flex-col-reverse md:flex-row justify-end md:justify-center">
      <div className="p-5 lg:p-0 flex xl:w-2/3 w-full flex-col justify-center">
          <AnimatedText playOnce duration={.8} className="font-bold text-2xl md:text-3xl tracking-tighter text-secondary w-fit">Hi there, I'm</AnimatedText>
          <AnimatedText playOnce delay={0.4} duration={1.2}
            className="mouse-tracker text-6xl md:text-8xl lg:text-8xl txt-name font-bold tracking-tighter bg-clip-text w-fit !leading-relaxed "
          >
            Bùi Văn Vũ
          </AnimatedText>
          <AnimatedText playOnce delay={1.2} className="text-2xl md:text-3xl font-bold tracking-tight text-secondary w-fit">Fullstack web developer</AnimatedText>
          <AnimatedText playOnce delay={1.6} className="text-2xl md:text-3xl font-bold tracking-tight text-secondary w-fit">Based in Viet Nam</AnimatedText>
          <div className="mt-8 flex flex-row justify-center md:justify-start tracking-tight font-bold">
            <a href="mailto:buivu_a11@live.com" title='buivu_a11@live.com' className="btn mr-3 py-1 px-3 flex flex-row items-center gap-1.5 bg-lime-100 hover:bg-lime-200 text-lime-700 rounded-md">
              <svg stroke="currentColor" fill="currentColor" color="#3f6212" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
              <span>Email</span>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/v%C5%A9-b%C3%B9i-661133126/" className="btn mr-3 py-1 px-3 flex flex-row items-center gap-1.5 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-800">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="rgb(29, 78, 216)" aria-hidden="true" focusable="false"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              <span>Linked In</span>
            </a>
            <a href="tel:+84339371390" className="btn mr-3 py-1 px-3 flex flex-row items-center gap-1.5 rounded-md bg-orange-100 text-orange-800 hover:bg-orange-200 ">
              <svg height="1em" width="1em" stroke="currentColor" fill="currentColor" color="rgb(154, 52, 18)"  viewBox="0 0 50 50" ><path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"/></svg>
              <span>Phone</span>
            </a>
          </div>
      </div>
      <div className="wf-full sm:w-full md:w-1/3 lg:w-1/3 h-[40vh] md:h-full flex flex-col justify-center items-center">
        <div className="relative p-0 md:p-5 w-1/2 md:w-full">
          <img width={800} height={800} style={{ padding: '10px', background: '#fff' }} className="rounded-full" src='/avt.jpg' />
        </div>
      </div>
    </div>
  );
}
