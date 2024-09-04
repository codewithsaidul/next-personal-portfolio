"use client"

import ServicesData from "./ServicesData";

const HomeServices = () => {
  return (
    <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
      <div >
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-2xl font-semibold dark:text-light">
            Services I Offered
          </h3>
          <a
            href="services.html"
            class="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
          >
            <span>See All Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              class="h-5 w-5"
            >
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div class="mt-6 grid max-[450px]:grid-cols-1 grid-cols-2 gap-6 md:grid-cols-3">
          {ServicesData.slice(0, 3).map((el) => (
            <div key={el.id}>
              {/* <!-- Services --> */}

              <div>
                {/* Service Item 1 */}
                <div class="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                  <div class="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                    
                    {el.icon}
                  </div>
                  <p class="mt-3 text-base font-medium text-dark dark:text-light/70">
                    {el.name}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
