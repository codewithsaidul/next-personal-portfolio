import Image from "next/image"
import Figma from "@/assects/images/figma.svg"
import HTML5 from "@/assects/images/html-5.svg"
import CSS3 from "@/assects/images/css-3.svg"
import Bootstrap from "@/assects/images/bootstrap.svg"
import Tailwind from "@/assects/images/tailwindcss.svg"
import MUI from "@/assects/images/material-ui.svg"
import JS from "@/assects/images/js.svg"
import ReactJS from "@/assects/images/react.svg"
import Framer from "@/assects/images/framer.svg"
import NodeJs from "@/assects/images/nodejs.svg"
import MongoDB from "@/assects/images/mongodb.svg"
import ExpressJS from "@/assects/images/expressJS.svg"

const Skill = () => {
  return (
    <div>
        {/* <!-- Expertise --> */}
                <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
                    <h3 class="text-2xl font-semibold dark:text-light">My Expert Area</h3>

                    <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={HTML5} alt="HTML5" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                HTML5
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                            <Image src={CSS3} alt="CSS3" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                CSS3
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={Bootstrap} alt="Bootstrap" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Bootstrap
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={Tailwind} alt="Tailwind CSS" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Tailwind CSS
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={MUI} alt="Material UI" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Material UI
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={JS} alt="Javascript" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Javascript
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={ReactJS} alt="ReactJS" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                React JS
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={Figma} alt="Figma" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Figma
                            </p>
                        </div>



                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={Framer} alt="Framer Motion" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Framer Motion
                            </p>
                        </div>

                    

                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={NodeJs} alt="NodeJs" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Node JS
                            </p>
                        </div>


                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={MongoDB} alt="MongoDB" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                MongoDB
                            </p>
                        </div>




                        <div class="text-center">
                            <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <Image src={ExpressJS} alt="ExpressJS" class="h-8 w-8" width={300} height={300} />
                            </div>
                            <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
                                Express JS
                            </p>
                        </div>


                    </div>
                </div>
    </div>
  )
}

export default Skill