import React from "react";
import { LayoutAccount, PageTitle } from "../components/DashboardLayout";

const MyPackges = () => {
  return (
    <LayoutAccount>
      <PageTitle title="MyPackges" />

      <div className="grid grid-cols-3 gap-5">
        <div className="rounded-lg bg-gradient-to-b from-indigo-200 to-indigo-50 p-5">
          <h1 className="text-lg font-semibold pb-3">Basic Plan</h1>
          <h2>
            <span className="text-2xl font-bold py-3">$ 4.99</span>
            <span className="text-lg text-gray-500">/month</span>
          </h2>
          <p className="text-sm text-gray-700 py-3">
            Get started with our Basic Plan kickstart your business journey
          </p>
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <ul className="text-sm py-3">
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Can create 4 services
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Basic progress tracking
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Ability of membership
            </li>
          </ul>
          <input
            type="button"
            value="Go Premium"
            className="rounded w-full text-white bg-indigo-600 bottom-0"
          />
        </div>
        <div className="rounded-lg bg-gradient-to-b from-indigo-500 to-indigo-50 p-5">
          <h1 className="text-lg font-semibold pb-3">Basic Plan</h1>
          <h2>
            <span className="text-2xl font-bold py-3">$ 19.99</span>
            <span className="text-lg text-gray-500">/month</span>
          </h2>
          <p className="text-sm text-gray-700 py-3">
            Get started with our Basic Plan kickstart your business journey
          </p>
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <ul className="text-sm py-3">
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Can create 4 services
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Basic progress tracking
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Ability of membership
            </li>
          </ul>
          <input
            type="button"
            value="Go Premium"
            className="rounded w-full text-white bg-indigo-600 bottom-0"
          />
        </div>
        <div className="rounded-lg bg-gradient-to-b from-indigo-200 to-indigo-50 p-5">
          <h1 className="text-lg font-semibold pb-3">Basic Plan</h1>
          <h2>
            <span className="text-2xl font-bold py-3">$ 11.99</span>
            <span className="text-lg text-gray-500">/month</span>
          </h2>
          <p className="text-sm text-gray-700 py-3">
            Get started with our Basic Plan kickstart your business journey
          </p>
          <div className="h-[1px] bg-gray-500 w-full"></div>
          <ul className="text-sm py-3">
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Can create 4 services
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Basic progress tracking
            </li>
            <li className="pb-3 font-semibold">
              <i className="fa-solid fa-check mr-3"></i>Ability of membership
            </li>
          </ul>
          <input
            type="button"
            value="Go Premium"
            className="rounded w-full text-white bg-indigo-600 bottom-0"
          />
        </div>
      </div>
    </LayoutAccount>
  );
};

export default MyPackges;
