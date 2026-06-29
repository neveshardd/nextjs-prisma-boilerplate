import { PrismaClient } from "@/generated/prisma/client";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname } from "node:path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  let url = process.env.DATABASE_URL ?? "file:./prisma/dev.db";

  // Em produção (Vercel), copia o banco bundled para /tmp (writable)
  if (process.env.VERCEL === "1" && url.startsWith("file:")) {
    const bundled = "./prisma/dev.db";
    const writable = "/tmp/prisma/dev.db";
    const dir = dirname(writable);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    if (!existsSync(writable) && existsSync(bundled)) {
      copyFileSync(bundled, writable);
    }
    url = `file:${writable}`;
  }

  const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
  const adapter = new PrismaBetterSqlite3({ url });
  return new PrismaClient({ adapter });
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
