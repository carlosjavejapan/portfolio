import ContactPage from "@/components/contact";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const ContactMe = () => {

  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col items-center justify-center h-full mb-20 md:mb-40">
        <div className="container flex flex-col w-full max-w-[700px] py-10 md:py-0">
          <h2 className="text-2xl leading-tight text-center md:text-3xl md:mb-5">
            Contact
            <span className="text-secondary font-bold"> Me</span>
          </h2>
          <div className="w-full xl:max-w relative z-10 grid grid-cols-1 gap-4 mt-5 mx-auto">
            <ContactPage />
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
 
export default ContactMe;
