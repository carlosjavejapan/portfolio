import AvatarPortfolio from "@/components/avatar-portfolio";
import BulbIlluminated from "@/components/bulb-illuminated";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "../../../../data";

const Portfolio = () => {

  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <BulbIlluminated />
      <div className="flex flex-col justify-center h-full md:mb-40 py-10 md:py-0">
        <h2 className="text-2xl leading-tight text-center md:text-3xl md:mb-5">
          My
          <span className="text-secondary font-bold"> Works</span>
        </h2>
        <div className="w-full xl:max-w-[85%] relative z-10 grid md:grid-cols-2 grid-rows-2 gap-6 md:gap-4 mt-4 mx-auto">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data}/>
          ))}
        </div>
      </div>
    </ContainerPage>
  );
}
 
export default Portfolio;
