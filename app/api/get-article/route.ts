import { mysqldb } from "@/lib/db";

export async function POST(req:Request, res:Response) {
    const { articleId } = await req.json();
    const [rows] = await mysqldb.query("SELECT * FROM articles WHERE id = ?", [articleId]);
    const artcle = rows[0]
    return new Response(JSON.stringify(rows[0]), { status: 200 });
}
