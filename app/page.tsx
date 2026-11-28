import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>SupaBase Experiment</h1>
            <p>Turns the documents a company sends into figures in one shared format, each checked against its source.</p>
            <Link href="/statements">Go to statements</Link>
        </main>
    );

}
