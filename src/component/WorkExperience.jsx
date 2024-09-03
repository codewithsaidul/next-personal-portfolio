import Image from "next/image";
import Google from "@/assects/images/spi.svg";
import Meta from "@/assects/images/spi.svg";
import Adobe from "@/assects/images/spi.svg";
import SPI from "@/assects/images/spi.svg"

const WorkExperience = () => {
  return (
    <div>
      {/* <!-- Work Experience --> */}
      <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
        <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
          Work Experience
        </h3>

        <div className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
          <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
            <div className="flex flex-col gap-1 md:flex-row md:gap-10">
              <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                2024 - Present
              </p>
              <div className="flex flex-col  gap-3">
                <div className="">
                  <h6 className="text-base font-semibold text-dark dark:text-light/70">
                    Sylhet Polytechnic Instiute
                  </h6>
                  <p className="text-sm text-muted font-semibold">Guest Lecturer</p>
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

          <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
            <div className="flex flex-col gap-1 md:flex-row md:gap-10">
              <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                2024 - Present
              </p>
              <div className="flex flex-col  gap-3">
                <div className="">
                  <h6 className="text-base font-semibold text-dark dark:text-light/70">
                    Sylhet Polytechnic Instiute
                  </h6>
                  <p className="text-sm text-muted">Guest Lecturer</p>
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
