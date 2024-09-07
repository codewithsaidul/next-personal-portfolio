import About from '@/component/about/About'
import AboutCounter from '@/component/about/AboutCounter'
import AboutSkill from '@/component/about/AboutSkill'
import Education from '@/component/about/Education'
import Intro from '@/component/SharedComponent/Intro'



const AboutPage = () => {
  return (
    <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
         
              <Intro />

            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <About />

                <AboutCounter />

               <div className="mt-10"> 
                <Education />
                <AboutSkill />
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage