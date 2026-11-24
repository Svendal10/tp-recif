export const config = {
  apiKey: process.env.API_KEY ?? "recif-secret",
  dbFile: process.env.DB_FILE ?? "recif.db",
  port: Number(process.env.PORT ?? 3000),
  allowedSpecies: ["koi", "betta", "poisson-rouge", "guppy"] as const,
};