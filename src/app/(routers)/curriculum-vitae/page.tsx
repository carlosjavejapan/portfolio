import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const CurriculumVitae = () => {

  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <div className="py-10 md:py-0 md:px-6">
          <h2 className="text-2xl leading-tight text-center md:text-3xl md:mt-10">
            職務経歴書-
            <span className="font-bold text-secondary">Curriculum Vitae</span>
          </h2>
          <TimeLine />
        </div>
      </ContainerPage>
    </>
  );
}
 
export default CurriculumVitae;
