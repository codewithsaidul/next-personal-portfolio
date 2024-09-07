import Homecontact from "@/component/Home/Homecontact";
import HomeIntro from "@/component/Home/HomeIntro";
import HomeServices from "@/component/Home/HomeServices";
import RecentProject from "@/component/Home/RecentProject";
import Skill from "@/component/Home/Skill";
import WorkExperience from "@/component/Home/WorkExperience";


const Home = () => {
  return (
    <>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Intro Component */}
        <HomeIntro />

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
