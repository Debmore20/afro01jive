"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu?.classList.toggle("hidden");
}

export default function MobileMenu() {

  return (
    <div className="text-extraone lg:hidden">
      <button onClick={toggleMobileMenu} className="">
        <Image src={"/hamburger-icon.svg"} alt="Menu" width={32} height={32} />
      </button>
      <nav id="mobile-menu" className="hidden">
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
          <li className="border-b text-center text-sm font-bold p-2">
            <Link href={"#"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
