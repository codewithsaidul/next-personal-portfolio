import ContactMarkue from "@/component/SharedComponent/ContactMarkue"
import Intro from "@/component/SharedComponent/Intro"
import Portfolio from "@/component/Work/Portfolio"
import WorkHeading from "@/component/Work/WorkHeading"


const WorkPage = () => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <Intro />

        <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <WorkHeading />
            <Portfolio />
            <ContactMarkue />
        </div>
    </div>
  )
}

export default WorkPage