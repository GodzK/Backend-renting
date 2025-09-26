const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

async function getAllFilms() {
    const films = await prisma.Film.findMany();
    console.log(films);
}

getAllFilms()