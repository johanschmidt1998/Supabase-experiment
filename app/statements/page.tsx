import Link from "next/link";

type statements = {
    id: string;
    title: string;
    statements: string[];
    notes?: string
}

const companies: statements[] = [
    {
        id: "company_1",
title: "wind_company",
        statements: ["Revenue grew 18% YoY", "Zero long-term debt"],
        notes: "company co-founder recently left"
    },

    {
        id: "company_2",
        title: "solar_company",
        statements: ["Revenue is down 9% YoY", "Recently raised 10m in series A"]
    },
    {
        id: "company_3",
        title: "water_company",
        statements: ["Revenue grew 20% YoY", "Profitable for the first time after 1 year of operating"],
        notes: "Recently started a partnership with Wise"
    }
]

export default function StatementsPage() {
    return (
        <main>
            link back to start page: <Link href="/"> Home </Link>
            <h1>
                number of companies: {companies.length}
            </h1>
            {companies.length === 0 ? (
              <p>No companies to show right now.</p>
            ) : (
              <ul>
                {companies.map((company) => (
                  <li key={company.id}>
                    {company.title}
                    <ul>
                      {company.statements.map((statement) => (
                        <li key={statement}>{statement}</li>
                      ))}
                    </ul>
                    {company.notes && <p>Note: {company.notes}</p>}
                  </li>
                ))}
              </ul>
            )}
        </main>
    );
}
