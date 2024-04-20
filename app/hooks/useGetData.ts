import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getMongoData() {
  const data = await prisma.champions.findMany();
  return data;
}
