import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Container from "./container";

const Navbar = () => {
  const navigation = [
    "Coming Soon",
    "AI Features",
    "About",
    "Settings",
  ];

  return (
    <div className="navBar w-full" style={{ width: "100%", height: "fit-content" }}>
      <nav style={{ width: "100%", height: "fit-content" }} className="relative flex items-center justify-around py-4 mx-auto lg:justify-around xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-around w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center text-2xl">
                    <span className="titlename">flashy.ai</span>
                  </span>
                </Link>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 focus:outline-none">
                          {item}
                      </Link>
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                        Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden space-x-4 lg:flex nav__item">
          <Link href="/" className="buttonStarted px-6 py-2 text-white rounded-md md:ml-5">
              Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;