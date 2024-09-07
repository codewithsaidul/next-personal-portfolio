"use client";

import Image from "next/image";
import ServicesData from "../data/ServicesData";
import Thumb from "@/assects/images/blog-img-1.jpg"

const ServicesCard = () => {
  return (
    <div>
      {/* <!-- Service cards --> */}
      <div class="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-14">
        {ServicesData.map((el) => (
          <div
            key={el.id}
            class="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4"
          >
            <div class="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
              {el.icon}
            </div>
            <p class="mt-3 text-base font-medium text-dark dark:text-light/70">
              {el.name}
            </p>
          </div>
        ))}
      </div>

      {/* <!-- image --> */}
      <div class="mt-10 aspect-video overflow-hidden rounded-lg bg-light dark:bg-dark-2 lg:mt-14">
        <Image
          src={Thumb}
          alt={"Thumbnail Image"}
          class="h-full w-full rounded-lg object-cover"
          width={1200}
          height={960}
        />
      </div>
    </div>
  );
};

export default ServicesCard;
