// import Image from "next/image";

import ArticlePreview from "@/components/ui/article_preview";

export default function Home() {
  return(
    <main className="px-12">
      <div className=" container grid grid-cols-12 max-w-6xl mx-auto gap-6">
        <ArticlePreview params={{articleId: 1, articleTitle: "Article 1", articleContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit"}}/>
        <ArticlePreview params={{articleId: 1, articleTitle: "Article 1", articleContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit"}}/>
        <ArticlePreview params={{articleId: 1, articleTitle: "Article 1", articleContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit"}}/>
        <ArticlePreview params={{articleId: 1, articleTitle: "Article 1", articleContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit"}}/>
      </div>
    </main>
  )
}
