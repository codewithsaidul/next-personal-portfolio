

const About = () => {
  return (
    <div>
      <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
        <div className="">
          <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            Hi, This Is <span className="text-primary">Saidul Islam Rana</span> 👋
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
            A Passionate
            <span className="font-semibold text-dark dark:text-white">
              Full Stack Developer
            </span>
            🖥️ &
            <span className="font-semibold text-dark dark:text-white">
              Product Designer
            </span>
            having
            <span className="font-semibold text-dark dark:text-white">
              12 years
            </span>
            of Experiences over 24+ Country Worldwide.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span>Available For Hire</span>
        </div>
      </div>
    </div>
  );
};

export default About;
