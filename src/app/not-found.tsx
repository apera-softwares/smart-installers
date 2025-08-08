"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="flex items-center justify-center  bg-gray-50 px-4 sm:px-6 py-24">
      <div className="container flex flex-col items-center justify-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-4xl sm:text-6xl text-gray-600 ">
            404
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium">
            {`Sorry, we couldn't find this page.`}
          </p>
          <Link
            href="/"
            className="px-8 py-4 text-lg sm:text-xl font-semibold rounded-md bg-primary text-white hover:text-gray-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
