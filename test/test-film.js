const {PrismaClient} = require('../generated/prisma');
const prisma = new PrismaClient();

async function getAllFilms(filterTitle) {
    const films = await prisma.Film.findMany(
        {
            where : { title : {contains : filterTitle}},
            orderBy : {id : 'desc'}
        }
    );
    console.log(films);
}

getAllFilms("love")