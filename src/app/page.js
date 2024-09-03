
import Intro from "@/component/Intro";
import WorkExperience from "@/component/WorkExperience";

export default function Home() {
  return (
   <>
    <div>
        {/* Intro Component */}
        <Intro />
        <div>
          <WorkExperience />
        </div>
    </div>
   </>
  );
}
