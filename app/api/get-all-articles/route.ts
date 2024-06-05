import { mysqldb } from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await mysqldb.query("SELECT * FROM articles");
        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
}