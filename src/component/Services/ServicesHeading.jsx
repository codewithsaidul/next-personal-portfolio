const ServicesHeading = () => {
  return (
    <div>
      <div class="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
        <div class="">
          <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            Services I <span class="text-primary">Offered</span>
          </h2>
          <p class="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
            Transforming Ideas into Innovative Reality, Elevate Your Vision with
            Our Expert
            <span class="font-semibold text-dark dark:text-white">
              Product Design and Development
            </span>
            Services!
          </p>
        </div>
        <div class="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
          <span class="relative flex h-2 w-2 shrink-0">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span>Available For Hire</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeading;
