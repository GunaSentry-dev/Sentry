import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import DefaultLayout from "~/layouts/DefaultLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "5558" },
    { name: "description", content: "Fill 5558 Extension Form" },
  ];
};

export default function Index() {

  useEffect(()=>{
     throw new Error("welcome to github");
  },[])

  return (
    <DefaultLayout>
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="">5558 Form</span>
          </h1>
        </header>
        <div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}
