import Link from "next/link";

export default function DesktopMenuUI() {
    return (
        <nav id="desktop-menu" className="hidden lg:block text-extraone max-w-7xl mx-auto mb-6">
        <ul className="flex justify-between ">
          <li className="text-center text-sm font-bold p-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-center text-sm font-bold p-2">
            <Link href={"#"}>Trending</Link>
          </li>
          <li className="text-center text-sm font-bold p-2">
            <Link href={"#"}>Music</Link>
          </li>
          <li className="text-center text-sm font-bold p-2">
            <Link href={"#"}>Videos</Link>
          </li>
          <li className="text-center text-sm font-bold p-2">
            <Link href={"#"}>Blog</Link>
          </li>
          <li className="text-center text-sm font-bold p-2">
            <Link href={"#"}>Privacy Policy</Link>
          </li>
          <li className=" text-center text-sm font-bold p-2">
            <Link href={"#"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
}