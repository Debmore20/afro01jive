export default function ArticlePreview({
  params,
}: {
  params: { articleId: number; articleTitle: string; articleContent: string };
}) {
  return (
    <div className="md:col-span-6 col-span-12 border border-slate-100 rounded-2xl shadow-md">
      <div className="p-6">
      <h2 className="text-2xl text-extratwo font-bold">{params.articleTitle}</h2>
      <p className="line-clamp-3 text-slate-600">{params.articleContent}</p>
      <p className=" text-extrathree text-sm font-bold ">Read More</p>
      </div>
    </div>
  );
}
