import postgres from "postgres";
import { sql as vercelSql } from "@vercel/postgres";

export interface Lead {
  id: number;
  name: string;
  company: string | null;
  stage: string | null;
  requirement: string | null;
  message: string | null;
  created_at: Date;
}

const isVercel = process.env.VERCEL === "1";
const hasDatabase = process.env.POSTGRES_URL && process.env.POSTGRES_URL.length > 0;

// Type definition to accommodate both postgres and vercel/postgres signatures
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let sql: any = null;

function getSql() {
  if (!sql && hasDatabase) {
    if (isVercel) {
      sql = vercelSql;
    } else {
      sql = postgres(process.env.POSTGRES_URL!);
    }
  }
  return sql;
}

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

  const sqlClient = getSql();
  if (isVercel) {
    const result = await sqlClient<Lead>`
      INSERT INTO leads (name, company, stage, requirement, message)
      VALUES (${data.name}, ${data.company || null}, ${data.stage || null}, ${data.requirement || null}, ${data.message || null})
      RETURNING *
    `;
    return result.rows[0];
  } else {
    const result = await sqlClient`
      INSERT INTO leads (name, company, stage, requirement, message)
      VALUES (${data.name}, ${data.company || null}, ${data.stage || null}, ${data.requirement || null}, ${data.message || null})
      RETURNING *
    `;
    return result[0] as Lead;
  }
}

export async function getLeads(): Promise<Lead[]> {
  if (!hasDatabase) {
    console.log("[DEV MODE] Returning empty leads (no database connection)");
    return [];
  }

  const sqlClient = getSql();
  if (isVercel) {
    const result = await sqlClient<Lead>`
      SELECT * FROM leads ORDER BY created_at DESC
    `;
    return result.rows;
  } else {
    const result = await sqlClient`
      SELECT * FROM leads ORDER BY created_at DESC
    `;
    return result as Lead[];
  }
}
