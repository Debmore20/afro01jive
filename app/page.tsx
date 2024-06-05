'use client';
// import Image from "next/image";
import {useState, useEffect} from "react";
import ArticlePreview from "@/components/ui/article_preview";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const response = await fetch('/api/get-all-articles');
      const data = await response.json();
      setArticles(data);
      setIsLoading(false);
    }
    getArticles();
  }, []);


  return(
    <main className="px-12">
      <div className=" container grid grid-cols-12 max-w-6xl mx-auto gap-y-6 md:gap-6">
        {articles.map((article) => (
          <ArticlePreview key={article.Articleid} params = {article} />
        ))}
      </div>
    </main>
  );
}
