const HeroBlock = () => {
  return (
    <section>
      <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48">
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="object-cover object-right w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
            <p className="text-base font-bold text-gray-600">
              Use “FIT40” coupon to get 40% flat discount
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl xl:text-7xl">
              Fitness kits that help you keep fit.
            </h1>

            <div className="mt-8 sm:mt-12">
              <a
                href="#"
                title=""
                className="
                          inline-flex
                          items-center
                          justify-center
                          px-8
                          py-3
                          text-base
                          font-bold
                          leading-7
                          text-white
                          transition-all
                          duration-200
                          bg-gray-900
                          border border-transparent
                          rounded-md
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                          hover:bg-gray-600
                          focus:ring-offset-[#FFE942]
                      "
                role="button"
              >
                Start shopping
              </a>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Guide = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div>
            <img
              className="w-full max-w-md mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png"
              alt=""
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Grow business with connections.
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Check all 1486 apps{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function StatsBlock() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Grow business with Celebration.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img
                className="ml-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                alt=""
              />

              <img
                className="absolute -top-4 -left-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                alt=""
              />

              <div className="absolute -bottom-10 -left-16">
                <div className="bg-yellow-300">
                  <div className="px-8 py-10">
                    <span className="block text-4xl font-bold text-black lg:text-5xl">
                      {" "}
                      53%{" "}
                    </span>
                    <span className="block mt-2 text-base leading-tight text-black">
                      {" "}
                      High Conversions
                      <br />
                      Everything{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Features = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">
            Build any pages with 3 simple steps
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Meet Rareblocks, the most rare & beautiful UI Kit
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-pj">
              Track your customers <br className="hidden xl:block" />
              directly from website
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">
              Create landing pages with Rareblocks that converts more.
            </p>

            <img
              className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature.png"
              alt=""
            />
            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">
              Consectetur adipis cing elit. Mattis a, tincidunt pulvinar
              sodales. Quis tellus vel eget in nulla odio. Tellus pharetra sit
              convallis vel, fermentum dignissim cras in.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-pj">
              Understand sales <br className="hidden xl:block" />
              performance better
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">
              Create landing pages with Rareblocks that converts more.
            </p>

            <img
              className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature2.png"
              alt=""
            />
            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Mattis
              a, tincidunt pulvinar sodales. Quis tellus vel eget in nulla odio.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-pj">
              Get feedbacks live & <br className="hidden xl:block" />
              make improvements
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">
              Create landing pages with Rareblocks that converts more.
            </p>

            <img
              className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature3.png"
              alt=""
            />
            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">
              Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget in
              nulla odio. Tellus pharetra sit convallis vel, fermentum dignissim
              cras in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoSection = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function TechLiteracyBlock() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            130+ Handcoded Blocks
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Celebration helps you build beautiful website
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-green-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Simply Copy & Paste
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-blue-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Easy to Customize
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-red-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Made with TailwindCSS
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const TextBlock = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
          <div className="pr-12 sm:pr-0">
            <div className="relative max-w-xs mb-12">
              <img
                className="object-bottom rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                alt=""
              />

              <img
                className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Grow business with Celebration.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto md:mx-0">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Read latest collection
          </h2>
          <p className="mt-5 text-base font-normal leading-7 text-gray-500">
            Create custom landing pages with Rareblocks that converts more
            visitors than any website.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
          <div className="group">
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/6/thumbnail-1.png"
                  alt=""
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                Growth
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-gray-500">
              April 09, 2022
            </p>
            <p className="mt-4 text-xl font-bold leading-tight text-gray-900 xl:pr-8">
              <a href="#" title="" className="">
                How a visual artist redefines success in graphic design
              </a>
            </p>
            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-gray-900 uppercase border-b border-gray-900 group"
              >
                Continue Reading
                <svg
                  className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="group">
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/6/thumbnail-2.png"
                  alt=""
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                Growth
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-gray-500">
              April 09, 2022
            </p>
            <p className="mt-4 text-xl font-bold leading-tight text-gray-900 xl:pr-8">
              <a href="#" title="" className="">
                How a visual artist redefines success in graphic design
              </a>
            </p>
            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-gray-900 uppercase border-b border-gray-900 group"
              >
                Continue Reading
                <svg
                  className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="group">
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/6/thumbnail-3.png"
                  alt=""
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                Growth
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-gray-500">
              April 09, 2022
            </p>
            <p className="mt-4 text-xl font-bold leading-tight text-gray-900 xl:pr-8">
              <a href="#" title="" className="">
                How a visual artist redefines success in graphic design
              </a>
            </p>
            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-gray-900 uppercase border-b border-gray-900 group"
              >
                Continue Reading
                <svg
                  className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Maxim = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:pt-24 xl:pt-40">
        <div className="flex flex-col">
          <div className="block lg:hidden">
            <img
              className="w-full max-w-lg mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/man.png"
              alt=""
            />
          </div>

          <div className="py-8 bg-gray-700 lg:order-2 sm:py-12">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-col items-center sm:justify-center sm:flex-row lg:justify-start">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/cameron-logo.svg"
                  alt=""
                />
                <div className="mt-5 sm:ml-12 sm:mt-0">
                  <p className="text-xl font-bold text-white font-pj">
                    Cameron Williamson
                  </p>
                  <p className="text-sm font-normal font-pj text-white mt-1.5">
                    Director of Technology, CreativeGIG
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-end lg:order-1">
              <div className="py-12 lg:pt-0 lg:pb-24 lg:w-1/2">
                <blockquote className="text-center lg:text-left">
                  <p className="text-3xl font-normal leading-relaxed text-gray-900 font-pj">
                    “Rareblocks made it so simple. Our new site is so much
                    beautiful and easier to work with than my old site. I just
                    choose the page, make the change.”
                  </p>
                </blockquote>
              </div>

              <div className="absolute bottom-0 right-0 hidden w-1/2 lg:block">
                <img
                  className="w-full max-w-lg ml-10 mr-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/man.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/2/avatar.jpg"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
            </blockquote>
            <p className="text-lg font-semibold text-black mt-7">
              Jenny Wilson
            </p>
            <p className="mt-1 text-base text-gray-600">
              Project Manager at Microsoft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div>
      {/* <Header /> */}
      <HeroBlock />
      <Features />
      <Guide />
      <LogoSection />
      <TechLiteracyBlock />
      <Resources />
      <TextBlock />
      <Testimonial />
      <StatsBlock />
      <Maxim />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
