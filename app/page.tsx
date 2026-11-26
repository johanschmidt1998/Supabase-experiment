import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>SupaBase Experiment</h1>
            <p>uses agents to read through emails and other messy documents and compiles it into a standardized .json</p>
            <Link href="/statements">Go to statements</Link>
        </main>
    );

}
