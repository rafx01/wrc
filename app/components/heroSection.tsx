import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let champs = [];
async function getData() {
  champs = await prisma.champions.findMany();
  console.log(champs);
}
getData();
export function HeroSection() {
  return <div className="">{champs[0].driver}</div>;
}
