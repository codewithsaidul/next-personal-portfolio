import Image from "next/image"
import CircleText from "@/assects/images/circle-text.svg"
import CircleTextLight from "@/assects/images/circle-text-light.svg"

const AboutCounter = () => {
  return (
    <div class="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
    <div class="flex flex-wrap items-start gap-6 lg:gap-10">
        <div class="">
            <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>40</span>+
            </h2>
            <p class="mt-2 text-muted">Year of Experience</p>
        </div>
        <div class="">
            <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>86</span>+
            </h2>
            <p class="mt-2 text-muted">Project Completed</p>
        </div>
        <div class="">
            <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                <span>72</span>+
            </h2>
            <p class="mt-2 text-muted">Happy Client</p>
        </div>
    </div>

    <div class="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
        <Image src={CircleText} alt="CircleText" class="absolute inset-0 h-full w-full animate-spin-slow dark:hidden" width={300} height={300} />
        <Image src={CircleTextLight} alt="CircleTextLight" class="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block" width={300} height={300} />
        <div class="grid h-full w-full place-content-center rounded-full bg-primary text-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-10 w-10">
                <path d="M20 5v30m-5-5 5 5 5-5" />
            </svg>
        </div>
    </div>
</div>
  )
}

export default AboutCounter