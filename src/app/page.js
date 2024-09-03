
import Intro from "@/component/Intro";
import RecentProject from "@/component/RecentProject";
import Skill from "@/component/Skill";
import WorkExperience from "@/component/WorkExperience";

export default function Home() {
  return (
   <>
    <div>
        {/* Intro Component */}
        <Intro />
        <div >
          <WorkExperience />

          <Skill />
        </div>

        <RecentProject />
    </div>
   </>
  );
}
