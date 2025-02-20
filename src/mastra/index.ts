import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";

import { weatherAgent } from "./agents";
import { PostgresStore } from "@mastra/pg";

const storage = new PostgresStore({
  connectionString: process.env.DATABASE_URL as string,
});

await storage.init();

export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
  storage,
});
