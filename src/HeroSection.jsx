import Frame from "./assets/frame.svg";

export default function HeroSection() {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full"
              src={Frame}
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#3335a1] lg:text-[73px]">
              Todo Qtec
            </h1>
            <p className="text-lg my-2 opacity-60">
              Qtec Solution Limited was founded at the end of 2019 with an aim
              to engineer robust technology services for super growing
              businesses founded by visionaries. We served software solutions
              for over 30 clients in the last two years and completed 50+ Medium
              and Large projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
