import { dataCurriculumPage } from "../../data";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <ul className="w-full max-w-4xl mx-auto md:pb-20 md:pt-5">
        {dataCurriculumPage.map((data) => (
          <li key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
            <h3 className="mb-1 text-xl sm:mb-0">{data.title}</h3>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="flex gap-2">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-[#03A9F4] rounded-full" >{data.dateIn}</time>
                <time className="sm:absolute left-0 top-6 translate-y-0.5 inline-flex items-center justify-center text-xs uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-[#5c5c5c] rounded-full" >{data.dateOut}</time>
              </div>
              <p className="text-sm font-extralight text-light-gray">{data.subtitle}</p>
            </div>
            <p className="text-sm text-light-gray">{data.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default TimeLine;