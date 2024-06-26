import Link from "next/link";
import ArticleData from "../interface/article-data-type";

export default function ArticlePreview({
  params,
}: {
  params: ArticleData;
}) {
  return (
    <div className="md:col-span-6 col-span-12 border border-slate-100 rounded-2xl shadow-md">
      <div className="p-6">
        <h2 className="text-2xl text-extratwo font-bold">{params.Title}</h2>
        <p className="line-clamp-3 text-slate-600">{params.Body}</p>
        <p className=" text-extrafour text-sm font-bold">
          <Link href={"/articles/"+ params.Articleid}>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
}
