import React from "react";

const Package = () => {
  return (
    //         <div class="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
    //     <div class="w-full px-0 lg:px-4">
    //       <h2 class="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
    //         Choose your plan
    //       </h2>
    //       <p class="py-1 text-sm text-center text-blue-700 mb-10">
    //         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    //       </p>
    //       <div class="flex flex-wrap items-center justify-center py-4 pt-0">
    //         <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
    //           <label class="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
    //             <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
    //               <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
    //                 Standard
    //               </h3>
    //               <p class="text-5xl font-bold text-center group-hover:text-white text-blue-500">
    //                 $25.<span class="text-3xl">95</span>
    //               </p>
    //               <p class="text-xs text-center uppercase group-hover:text-white text-blue-500">
    //                 monthly
    //               </p>
    //             </div>
    //             <div
    //               class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
    //             >
    //               <p class="text-xl text-white">
    //                 1 month
    //               </p>
    //               <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
    //                 Get Started
    //               </button>
    //             </div>
    //           </label>
    //         </div>

    //         <div class="w-full p-4 md:w-1/2 lg:w-1/4">
    //           <label class="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
    //             <div class="w-full px-4 py-8 rounded-t-lg bg-blue-500">
    //               <h3 class="mx-auto text-base font-semibold text-center underline text-white group-hover:text-white">
    //                 Premium
    //               </h3>
    //               <p class="text-5xl font-bold text-center text-white">
    //                 $21.<span class="text-3xl">95</span>
    //               </p>
    //               <p class="text-xs text-center uppercase text-white">
    //                 monthly
    //               </p>
    //             </div>
    //             <div
    //               class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-700"
    //             >
    //               <p class="text-xl text-white">
    //                 3 months
    //               </p>
    //               <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
    //                 Save 15%
    //               </button>
    //             </div>
    //           </label>
    //         </div>

    //         <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
    //           <label class="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
    //             <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
    //               <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
    //                 Elite
    //               </h3>
    //               <p class="text-5xl font-bold text-center group-hover:text-white text-blue-500">
    //                 $19.<span class="text-3xl">45</span>
    //               </p>
    //               <p class="text-xs text-center uppercase group-hover:text-white text-blue-500">
    //                 monthly
    //               </p>
    //             </div>
    //             <div
    //               class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
    //             >
    //               <p class="text-xl text-white">
    //                 6 months
    //               </p>
    //               <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
    //                 Save 25%
    //               </button>
    //             </div>
    //           </label>
    //         </div>

    //       </div>
    //     </div>
    //   </div>

    <section
      class="
   px-12
   bg-white
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
    >
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span class="font-semibold text-lg text-primary mb-2 block">
                Pricing Table
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Pricing Plan
              </h2>
              <p class="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span class="text-primary font-semibold text-lg block mb-4">
                Basic
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $297
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                billed yearly
              </p>

              <div class="overflow-x-auto">
                <table class="table w-full">
                  <thead>
                    <tr>
                      <th>General</th>
                      <th>Yes</th>
                      <th>Yes</th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-xs">Number of sites</td>
                      <td>X</td>
                      <td>V</td>
                      <td>V</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                     1 User
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     All UI components
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     Lifetime access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     Free updates
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     Use on 1 (one) project
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     3 Months support
                  </p>
               </div> */}
              <a
                href="javascript:void(0)"
                class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
              >
                Buy Basic
              </a>
              <div>
                <span class="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span class="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="w-48 rounded-full text-white text-center py-2 mx-auto my-[-8px] bg-primary">
              Best value
            </div>
            <div
              class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span class="text-primary font-semibold text-lg block mb-4">
                Business
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $697
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                billed yearly
              </p>
              <a
                href="javascript:void(0)"
                class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-primary
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
              >
                Buy Business
              </a>
              <div>
                <span class="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span class="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span class="text-primary font-semibold text-lg block mb-4">
                Pro
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $997
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                billed yearly
              </p>

              <a
                href="javascript:void(0)"
                class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
              >
                Buy Pro
              </a>
              <div>
                <span class="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span class="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
