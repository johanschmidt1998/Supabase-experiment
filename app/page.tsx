import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>SupaBase Experiment</h1>
            <p> Reads the financial documents a company sends and turns them into figures in one shared format, each checked against its source page.</p>
            <Link href="/statements">Go to statements</Link>
        </main>
    );

}
