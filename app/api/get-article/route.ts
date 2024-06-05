import mysqldb from "@/lib/db";

export async function POST(req: Request, res: Response) {
  const { articleId } = await req.json();
  const [rows] = await mysqldb.query("SELECT * FROM articles WHERE Articleid = ?", [
    articleId,
  ]);
  const article = rows[0];
  const [author] = await mysqldb.query("SELECT * FROM authors WHERE Authorid = ?", [
    article.Authorid,
  ]);
  const articledata = { ...article, author };
  return new Response(JSON.stringify(articledata), { status: 200 });
}
