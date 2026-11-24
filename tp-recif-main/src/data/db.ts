import Database from "better-sqlite3";

export const db = new Database(process.env.DB_FILE ?? "recif.db");
db.pragma("foreign_keys = ON");