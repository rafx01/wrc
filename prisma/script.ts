const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const addChampion = await prisma.user.create({
    data: {
        driver: "Sandro Munari",
        driverCountry:"Italy",
        copilot: "Pierro Sodano",
        copilotCountry: "Italy",
        car: "Fiat 131 Abarth",
        year: "1977"
    },
});

console.log(`New champion added: ${addChampion.driver, addChampion.copilot}`, addChampion);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });