"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import ArticlePreview from "@/components/ui/article_preview";
import ArticleData from "@/components/interface/article-data-type";



export default function Home() {
  const [articles, setArticles] = useState([] as Array<ArticleData>)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch("/api/get-all-articles");
      const data = await response.json();
      setArticles(data);
      setIsLoading(false);
    }
    getArticles();
  }, []);

  return (
    <main className="px-12">
      <div className=" container grid grid-cols-12 max-w-6xl mx-auto gap-y-6 md:gap-6">
        {isLoading ? (
          <ArticlePreviewLoading />
        ) : (
          articles.map((article) => (
            <ArticlePreview key={article.Articleid} params={article} />
          ))
        )}
      </div>
    </main>
  );
}

function ArticlePreviewLoading() {
  return (
    
    <div className="md:col-span-6 col-span-12 border border-slate-100 rounded-2xl shadow-md">
      <div className="p-6">
        <h2 className="h-6 text-extratwo font-bold"></h2>
        <p className="line-clamp-3 h-4 text-slate-600"> </p>
        <p className=" text-extrafour h-4 font-bold"> </p>
      </div>
    </div>
  );
}
