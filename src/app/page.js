import Intro from "@/component/Intro";
import RecentProject from "@/component/RecentProject";
import Skill from "@/component/Skill";
import WorkExperience from "@/component/WorkExperience";
// import ServicesData from "@/component/ServicesData";
import HomeServices from "@/component/HomeServices";
import Homecontact from "@/component/Homecontact";

const Home = () => {
  return (
    <>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Intro Component */}
        <Intro />

        <div class="grid grid-cols-1 gap-4 lg:gap-6">
          <WorkExperience />
          <Skill />
        </div>

        <RecentProject />

        <HomeServices />
        <Homecontact />
      </div>
    </>
  );
};

export default Home;
