import React from "react";
import Image from "next/image";
import logo from "../public/bed.png";
import Link from "next/link";

export class Header extends React.Component {
  render() {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} alt="logo" width="50" height="60" />
            <Link href="/">
              <a className="ml-3 text-xl">bdw.rs</a>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <div className="flex">
            <input
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </header>
    );
  }
}
