export interface Lead {
  id: number;
  name: string;
  company: string | null;
  stage: string | null;
  requirement: string | null;
  message: string | null;
  created_at: Date;
}

const hasDatabase = process.env.POSTGRES_URL && process.env.POSTGRES_URL.length > 0;

export async function createLead(data: {
  name: string;
  company?: string;
  stage?: string;
  requirement?: string;
  message?: string;
}): Promise<Lead> {
  if (!hasDatabase) {
    console.log("[DEV MODE] Lead created (not saved to database):", data);
    return {
      id: Date.now(),
      name: data.name,
      company: data.company || null,
      stage: data.stage || null,
      requirement: data.requirement || null,
      message: data.message || null,
      created_at: new Date(),
    };
  }

  const { sql } = await import("@vercel/postgres");
  const result = await sql<Lead>`
    INSERT INTO leads (name, company, stage, requirement, message)
    VALUES (${data.name}, ${data.company || null}, ${data.stage || null}, ${data.requirement || null}, ${data.message || null})
    RETURNING *
  `;
  return result.rows[0];
}

export async function getLeads(): Promise<Lead[]> {
  if (!hasDatabase) {
    console.log("[DEV MODE] Returning empty leads (no database connection)");
    return [];
  }

  const { sql } = await import("@vercel/postgres");
  const result = await sql<Lead>`
    SELECT * FROM leads ORDER BY created_at DESC
  `;
  return result.rows;
}
