import Link from "next/link";

const Resume = () => {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center text-center">
        <h1 className="heading max-w-[45vw] text-5xl font-semibold">
          Ready to take <span className="text-green-400">your</span> idea into digital
          presence to the next level?
        </h1>
        <p className="text-white-200 mt-10 my-5 text-center text-md">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-8 mt-10">
        <Link href="">
            <button className="w-40 h-10 rounded-xl bg-green-500 hover:bg-green-600 dark:border-white border-white text-white text-sm">
                Download CV
            </button>
        </Link>
        <Link href="#contact">
            <button className="w-40 h-10 rounded-xl bg-white text-black hover:bg-gray-400 border border-black  text-sm">
                Hire
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;