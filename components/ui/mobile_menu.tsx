"use client";
import Image from "next/image";
import Link from "next/link";

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.toggle("hidden");
}

export default function MobileMenu() {

  return (
    <div className="text-extraone lg:hidden">
      <button onClick={toggleMobileMenu} className="max-w-fit absolute ml-6 mt-1">
        <Image src="/hamburger-icon.svg" alt="menu" width={24} height={24} />
      </button>
      <nav id="mobile-menu" className="hidden mx-8 text-extratwo mb-3">
        <ul>
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"#"}>Trending</Link>
          </li>
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"#"}>Music</Link>
          </li>
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"#"}>Videos</Link>
          </li>
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"#"}>Blog</Link>
          </li>
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"#"}>Privacy Policy</Link>
          </li>
          <li className=" text-center text-sm font-bold p-2">
            <Link href={"#"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
