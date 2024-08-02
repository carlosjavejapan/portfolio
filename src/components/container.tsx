interface ConrtainerPageProps {
  children: React.ReactNode
}

const ContainerPage = (props: ConrtainerPageProps) => {
  const {children} = props
  return (
    <div className="w-full max-w-6xl px-4 mx-auto mt-28 mb-20 md:pb-0 md:px-0">{children}</div>
  );
}
 
export default ContainerPage;