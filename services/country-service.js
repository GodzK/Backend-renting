const repo = require('../repositories/country-repository');

module.exports = {
    getAll: async function () {
        return await repo.findAll();
    },
    getById: async function (id, includeCity = false) {
        const uniqueOne = await repo.findById(id, includeCity);
        if (!uniqueOne) {
            const err = new Error(`Country not found for ID ${id}`);
            err.code = 'NOT_FOUND';
            err.status = 404;
            throw err;
        }
        return uniqueOne;
    },
}