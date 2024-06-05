import { Fugaz_One } from "next/font/google";

const fugazOne = Fugaz_One({weight:"400", subsets: ["latin"], fallback:["sans"] });

export default function SiteHeader() {
  return (
    <div className={fugazOne.className}>
      <h2 className="text-extraone text-4xl text-center font-bold mb-2">afr01jive</h2>
      <p className="text-slate-600 text-center text-sm uppercase">feel the sync</p>
    </div>
  );
}
