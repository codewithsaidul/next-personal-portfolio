import ContactForm from "@/component/Contact/ContactForm"
import ContactHeading from "@/component/Contact/ContactHeading"
import GoogleMap from "@/component/Contact/GoogleMap"
import Intro from "@/component/SharedComponent/Intro"

const ContanctPage = () => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <Intro />

        <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <ContactHeading />
            <ContactForm />
            <GoogleMap />
        </div>
    </div>
  )
}

export default ContanctPage