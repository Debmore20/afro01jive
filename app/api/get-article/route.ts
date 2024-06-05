import ArticleData from "@/components/interface/article-data-type";
import mysqldb from "@/lib/db";



export async function POST(req: Request, res: Response) {
  try {
    const { articleId } = await req.json();
    const [rows]= await mysqldb.query(
      "SELECT * FROM articles WHERE Articleid = ?",
      [articleId]
    );
    const data = rows as Array<Object>;
    const article = data[0] as ArticleData;
  
    const [author] = await mysqldb.query(
      "SELECT * FROM authors WHERE Authorid = ?",
      [article.Authorid]
    );
    const articledata = { ...article, author };
    return new Response(JSON.stringify(articledata), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
