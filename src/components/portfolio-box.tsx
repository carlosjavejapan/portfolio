import Image from "next/image"
import Link from "next/link"

interface PortfolioBoxProps {
  data: {
    title: string,
    image: string,
    description: string,
    warning?: string,
    languages: string,
    period?: string,
    urlDemo?: string
  }
}
const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props
  const { title, image, description, warning, urlDemo, languages, period } = data
  return (
    <div>
      <h3 className="mb-4 text-xl">
        {title}
      </h3>
      <div className="relative overflow-hidden group cursor-pointer rounded-lg border">
        <Image priority={false} src={image} alt="Image Product" width={500} height={300} className="w-full md:w-full rounded-2xl h-auto scale-105" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#333333] via-[#333333] to-[#131424] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
        <div className="flex gap-5 h-fit overflow-auto">
          <div className="h-fit absolute top-1/2 bottom-0 translate-y-full group-hover:-translate-y-1/2 transition-all duration-500">
            <div className="px-4 flex flex-col gap-x-2 text-[13px] tracking-[0.2em]">
              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-400 text-light-gray">
                <p className="mt-2">{description}</p>
                {warning && <p className="text-[11px]">{warning}</p>}
                <p className="mt-2 font-bold">{languages}</p>
                {period && <p className="mt-2">{period}</p>}
              </div>
              {urlDemo && (
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 inline-flex mt-2">
                  <Link
                    href={urlDemo}
                    target="_blank"
                    className="w-fit transition-all px-4 py-2 font-extralight text-sm bg-indigo-500 text-light-gray rounded-md shadow-sm hover:bg-indigo-700"
                  >
                      view website
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default PortfolioBox;