
import Typography from "../Typography";
import TestMonialCard from "../Card/TestiMonialCard";

const TestiMonial = () => {
  return (
    <div className="h-full bg-slate-800 dark:bg-slate-300 text-slate-800 min-h-[70vh] dark:text-white px-0 py-20 xl:px-20 lg:px-10 md:px-0 xm:px-0">
      <div className="flex justify-center items-center h-full">
        <Typography className="dark:text-slate-800 text-white" size="h3">Client Testimonials</Typography>
      </div>
      <div className="flex h-[40vh]">
        <TestMonialCard />
      </div>
    </div>
  )
}

export default TestiMonial;