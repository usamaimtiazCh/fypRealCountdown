/* eslint-disable no-unused-vars */
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-screen px-10">
      <div className="container mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <h1 className="mb-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-center  lg:w-auto lg:text-left  dark:text-white text-[2rem]">
          Analytics{" "}
        </h1>{" "}
        <section className="mb-10 text-center">
          <div className="grid lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-16 lg:mb-0 w-full">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    1000
                  </h3>
                  <h5 className="mb-4 text-lg font-medium">All Listings</h5>
                </div>
              </div>
            </div>

            <div className="mb-16 lg:mb-0 w-full">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    700
                  </h3>
                  <h5 className="mb-4 text-lg font-medium">Active Listings</h5>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    49
                  </h3>
                  <h5 className="mb-4 text-lg font-medium">Buyed Listings</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <h1 className="mb-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-center  lg:w-auto lg:text-left  dark:text-white text-[2rem]">
            Recent Listings{" "}
          </h1>{" "}
          <div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full max-w-full px-3 mb-6  mx-auto">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                  <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                    {/* <!-- card body  --> */}
                    <div className="flex-auto block py-8 pt-6 px-9">
                      <div className="overflow-x-auto">
                        <table className="w-full my-0 align-middle text-dark border-neutral-200">
                          <thead className="align-bottom">
                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                              <th className="pb-3 text-start min-w-[175px]">
                                Title
                              </th>
                              <th className="pb-3 pl-3 text-start min-w-[100px]">
                                OWNER
                              </th>
                              <th className="pb-3 pl-3 text-start min-w-[100px]">
                                PROGRESS
                              </th>
                              <th className="pb-3 pl-5 pr-12 text-start min-w-[175px]">
                                STATUS
                              </th>
                              <th className="pb-3 pr-12 text-start min-w-[100px]">
                                DEADLINE
                              </th>
                              <th className="pb-3 text-start min-w-[50px]">
                                DETAILS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Social Media API{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Olivia Cambell
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  6.5%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                  {" "}
                                  In Progress{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-08-23
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-40-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Geolocation App{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Luca Micloe
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                    />
                                  </svg>{" "}
                                  2.7%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-light-inverse bg-light rounded-lg">
                                  {" "}
                                  Under Review{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2024-04-11
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      iOS Login{" "}
                                      <span className="text-sm">(Morra)</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Bianca Winson
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  6.8%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                  {" "}
                                  In Progress{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2024-02-10
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Axios Menu{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Roberto Alliton
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  4.5%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-success bg-success-light rounded-lg">
                                  {" "}
                                  Done{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-05-31
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-48-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Resto Aperto{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Michael Kenny
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                    />
                                  </svg>{" "}
                                  1%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-warning bg-warning-light rounded-lg">
                                  {" "}
                                  Postponed{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-05-15
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ACTIVE LISTINGS  */}
        <div>
          <h1 className="mb-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-center  lg:w-auto lg:text-left  dark:text-white text-[2rem]">
            Active Listings{" "}
          </h1>{" "}
          <div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full max-w-full px-3 mb-6  mx-auto">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                  <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                    {/* <!-- card body  --> */}
                    <div className="flex-auto block py-8 pt-6 px-9">
                      <div className="overflow-x-auto">
                        <table className="w-full my-0 align-middle text-dark border-neutral-200">
                          <thead className="align-bottom">
                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                              <th className="pb-3 text-start min-w-[175px]">
                                Title
                              </th>
                              <th className="pb-3 pl-3 text-start min-w-[100px]">
                                OWNER
                              </th>
                              <th className="pb-3 pl-3 text-start min-w-[100px]">
                                PROGRESS
                              </th>
                              <th className="pb-3 pl-5 pr-12 text-start min-w-[175px]">
                                STATUS
                              </th>
                              <th className="pb-3 pr-12 text-start min-w-[100px]">
                                DEADLINE
                              </th>
                              <th className="pb-3 text-start min-w-[50px]">
                                DETAILS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Social Media API{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Olivia Cambell
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  6.5%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                  {" "}
                                  In Progress{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-08-23
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-40-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Geolocation App{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Luca Micloe
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                    />
                                  </svg>{" "}
                                  2.7%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-light-inverse bg-light rounded-lg">
                                  {" "}
                                  Under Review{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2024-04-11
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      iOS Login{" "}
                                      <span className="text-sm">(Morra)</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Bianca Winson
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  6.8%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                  {" "}
                                  In Progress{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2024-02-10
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Axios Menu{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Roberto Alliton
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                    />
                                  </svg>{" "}
                                  4.5%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-success bg-success-light rounded-lg">
                                  {" "}
                                  Done{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-05-31
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-b-0">
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                    <img
                                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-48-new.jpg"
                                      className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start">
                                    <a
                                      href="javascript:void(0)"
                                      className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                    >
                                      {" "}
                                      Resto Aperto{" "}
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  Michael Kenny
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-danger bg-danger-light rounded-lg">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 mr-1"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                    />
                                  </svg>{" "}
                                  1%{" "}
                                </span>
                              </td>
                              <td className="p-3 pr-12 text-start">
                                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-warning bg-warning-light rounded-lg">
                                  {" "}
                                  Postponed{" "}
                                </span>
                              </td>
                              <td className="pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  2023-05-15
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                  <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
};

export default Dashboard;
