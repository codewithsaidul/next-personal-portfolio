import Intro from "@/component/Intro";
import RecentProject from "@/component/RecentProject";
import Skill from "@/component/Skill";
import WorkExperience from "@/component/WorkExperience";
// import ServicesData from "@/component/ServicesData";
import HomeServices from "@/component/HomeServices";


const Home = () => {
  return (
    <>
      <div>
        {/* Intro Component */}
        <Intro />
        <div>
          <WorkExperience />

          <Skill />
        </div>

        <RecentProject />

        <div>
          <div>
              <HomeServices />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
