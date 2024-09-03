import Image from "next/image";
import Google from "@/assects/images/spi.svg";
import Meta from "@/assects/images/spi.svg";
import Adobe from "@/assects/images/spi.svg";
import SPI from "@/assects/images/spi.svg"

const WorkExperience = () => {
  return (
    <div>
      {/* <!-- Work Experience --> */}
      <div class="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
        <h3 class="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
          Work Experience
        </h3>

        <div class="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
          <div class="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
            <div class="flex flex-col gap-1 md:flex-row md:gap-10">
              <p class="mt-1 text-sm font-medium text-muted dark:text-light/70">
                2024 - Present
              </p>
              <div class="flex flex-col  gap-3">
                <div class="">
                  <h6 class="text-base font-semibold text-dark dark:text-light/70">
                    Sylhet Polytechnic Instiute
                  </h6>
                  <p class="text-sm text-muted font-semibold">Guest Lecturer</p>
                </div>

                <div className="ml-6">
                  <ul className="flex flex-col gap-1">
                    <li className="text-xs list-disc text-muted">Delivery of Instruction</li>
                    <li className="text-xs list-disc text-muted">Evaluation of Students</li>
                    <li className="text-xs list-disc text-muted">Student Advice and Assistance</li>
                    <li className="text-xs list-disc text-muted">Career Guidance & Mentoring</li>
                    <li className="text-xs list-disc text-muted">Tracking and Reporting Developments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
            <div class="flex flex-col gap-1 md:flex-row md:gap-10">
              <p class="mt-1 text-sm font-medium text-muted dark:text-light/70">
                2024 - Present
              </p>
              <div class="flex flex-col  gap-3">
                <div class="">
                  <h6 class="text-base font-semibold text-dark dark:text-light/70">
                    Sylhet Polytechnic Instiute
                  </h6>
                  <p class="text-sm text-muted">Guest Lecturer</p>
                </div>

                <div className="ml-6">
                  <ul className="flex flex-col gap-1">
                    <li className="text-xs list-disc text-muted">Delivery of Instruction</li>
                    <li className="text-xs list-disc text-muted">Evaluation of Students</li>
                    <li className="text-xs list-disc text-muted">Student Advice and Assistance</li>
                    <li className="text-xs list-disc text-muted">Career Guidance & Mentoring</li>
                    <li className="text-xs list-disc text-muted">Tracking and Reporting Developments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
