"use client";
import ArticleData from "@/components/interface/article-data-type";
// import Image from "next/image";
import { useState, useEffect } from "react";



export default function ArticlePage({ params }: { params: { id: number } }) {
  const [articleData, setArticleData] = useState({} as ArticleData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getArticle() {
      const urlEndpoint = `/api/get-article`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleId: params.id }),
      };
      const response = await fetch(urlEndpoint, options);
      const data = await response.json();
      setArticleData(data);
      setIsLoading(false);
      console.log(data);
    }
    getArticle();
  }, []);

  return (
    <main className="px-12">
      {isLoading ? (
        <ArticleSectionLoading />
      ) : (
        <section className="container max-w-6xl mx-auto border rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{articleData.Title}</h1>
          <p>
            {`by: ` +
              `${articleData.author[0].FirstName}` +
              " " +
              `${articleData.author[0].LastName}`}
          </p>
          <p className="text-slate-600 text-xs mb-4">{articleData.PostedAt}</p>
          <p>{articleData.Body}</p>
        </section>
      )}
    </main>
  );
}

function ArticleSectionLoading() {
  return (
    <section className="container max-w-6xl mx-auto border rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4"> </h1>
      <p> </p>
      <p className="text-slate-600 text-xs mb-4"> </p>
      <p> </p>
    </section>
  );
}
