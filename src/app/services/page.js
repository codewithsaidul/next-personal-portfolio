import ServicesCard from '@/component/Services/ServicesCard'
import ServicesHeading from '@/component/Services/ServicesHeading'
import ContactMarkue from '@/component/SharedComponent/ContactMarkue'
import Intro from '@/component/SharedComponent/Intro'


const ServicesPage = () => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <Intro />

        <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <ServicesHeading />
            <ServicesCard />
            <ContactMarkue />
        </div>
    </div>
  )
}

export default ServicesPage