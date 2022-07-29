import Header from "./Header";
import Footer from "./Footer";

import React from "react";

const IntroBlock = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 xl:gap-x-36">
          <div className="md:order-2">
            <img
              className="w-full max-w-sm mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/3/members.png"
              alt=""
            />
          </div>

          <div className="text-center md:order-1 md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              We work together, as a seamless remote team
            </h2>
            <p className="text-lg font-medium text-gray-900 mt-7 font-pj">
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>
            <p className="mt-5 text-base font-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuesIntro = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
          <div className="text-center md:text-left lg:pr-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Never miss any task
            </h2>
            <p className="mt-4 text-base text-gray-700 sm:mt-8 font-pj">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>

            <div className="relative inline-flex mt-10 group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Add First Task
              </a>
            </div>
          </div>

          <div>
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features/2/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <svg
                className="text-blue-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
              <svg
                className="text-orange-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Fast & Easy to Load
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
              <svg
                className="text-green-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Light & Dark Version
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
              <svg
                className="text-red-600 w-9 h-9"
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
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Filter Blocks
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Maxim = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋 I am <br className="block sm:hidden" />
              Jenny Carter
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt=""
            />
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

const CTABlock = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Create any landing page with Rareblocks
            </h2>
          </div>

          <ul className="flex flex-col items-center justify-center mt-8 space-y-5 sm:mt-12 lg:mt-16 md:flex-row md:space-y-0 md:space-x-12">
            <li className="flex items-center text-gray-900">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-lg font-bold font-pj">
                {" "}
                150+ UI Blocks{" "}
              </span>
            </li>

            <li className="flex items-center text-gray-900">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-lg font-bold font-pj">
                {" "}
                Fully Responsive{" "}
              </span>
            </li>

            <li className="flex items-center text-gray-900">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 text-lg font-bold font-pj">
                {" "}
                Just Copy & Paste{" "}
              </span>
            </li>
          </ul>

          <div className="mt-8 text-center sm:mt-12">
            <div className="relative inline-flex group">
              <div
                className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>

              <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center py-3.5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent px-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                role="button"
              >
                Get Rareblocks
              </a>
            </div>

            <p className="mt-5 text-sm font-normal text-gray-500 font-pj">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900">Roadmap</h2>
        </div>

        <div className="mt-16 lg:mt-20">
          <ul className="max-w-lg mx-auto space-y-12">
            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                0%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-gray-900">Launch</p>
                <p className="mt-5 text-base font-medium text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  id porttitor sed in ultricies ultrices cursus nulla. Interdum
                  vitae platea quam et. Et sit pellentesque sociis pretium
                  bibendum. Est placerat nulla sed ac vitae justo id nulla duis.
                </p>
              </div>
            </li>

            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                15%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-gray-900">
                  Getting Investments
                </p>
                <p className="mt-5 text-base font-medium text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  id porttitor sed in ultricies ultrices cursus nulla. Interdum
                  vitae platea quam et. Et sit pellentesque sociis pretium
                  bibendum. Est placerat nulla sed ac vitae justo id nulla duis.
                </p>
              </div>
            </li>

            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                42%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-gray-900">
                  Opening Collections
                </p>
                <p className="mt-5 text-base font-medium text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  id porttitor sed in ultricies ultrices cursus nulla. Interdum
                  vitae platea quam et. Et sit pellentesque sociis pretium
                  bibendum. Est placerat nulla sed ac vitae justo id nulla duis.
                </p>
              </div>
            </li>

            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                15%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-gray-900">
                  Getting Investments
                </p>
                <p className="mt-5 text-base font-medium text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                  id porttitor sed in ultricies ultrices cursus nulla. Interdum
                  vitae platea quam et. Et sit pellentesque sociis pretium
                  bibendum. Est placerat nulla sed ac vitae justo id nulla duis.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

function AboutContent() {
  return (
    <div>
      <IntroBlock />
      <ValuesIntro />
      <Features />
      <Maxim />
      <Testimonial />
      <CTABlock />
      <Roadmap />
    </div>
  );
}

function About() {
  return (
    <div>
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
