import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Container from "./container";

const Navbar = () => {
  const navigation = [
    "Home",
    "Home",
    "Home",
    "Home",
  ];

  return (
    <div className="navBar w-full">
      <nav className="relative flex flex-wrap items-center justify-around py-4 mx-auto lg:justify-around xl:px-0">
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