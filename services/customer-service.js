const repo = require('../repositories/customer-repository');
module.exports = {
    getAll: async function (includeAddress = false, pageRequest = {}) {
        return repo.findAll(includeAddress, pageRequest);
    },
    getById: async function (id) {
        const uniqueOne = await repo.findById(id);
        if (!uniqueOne) {
            const err = new Error(`City not found for ID ${id}`);
            err.code = 'NOT_FOUND';
            err.status = 404;
            throw err;
        }
        return uniqueOne;
    },
}