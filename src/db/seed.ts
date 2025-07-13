import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schema/index.ts";



await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
        createdAt: f.date({ minDate: "2025-01-01T08:00:00Z", maxDate: "2025-07-12T17:59:59Z" })
      },
      with: {
        questions: 1
      }
    },
    questions: {
      columns: {
        question: f.loremIpsum(),
        answer: f.loremIpsum(),
        createdAt: f.date({ minDate: "2025-01-01T08:00:00Z", maxDate: "2025-07-12T17:59:59Z" })
      }
    }
  }
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log("Database reset and seeded successfully.");