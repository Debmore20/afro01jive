'use client';
// import Image from "next/image";
import {useState, useEffect} from "react";

export default function ArticlePage({ params }: { params: { id: number } }) {

    const [articleData, setArticleData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      async function getArticle() {
        const urlEndpoint = `/api/get-article`
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ articleId: params.id })
        }
        const response = await fetch(urlEndpoint, options);
        const data = await response.json();
        setArticleData(data);
        setIsLoading(false);
        console.log(data)
      }
      getArticle(); 
    }, []);

  return (
    <main className="px-12">
      <section className="container max-w-6xl mx-auto">
        <h1>{articleData?.Title}</h1>
        <p>{articleData?.Body}</p>
        <p>{`${articleData?.author[0].FirstName}` + " " + `${articleData?.author[0].LastName}`}</p>
        <p>{articleData?.PostedAt}</p>
      </section>
    </main>
  );
}
