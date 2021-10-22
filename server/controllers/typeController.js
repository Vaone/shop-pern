const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch(e) {
            return res.status(400).json({message: 'Creation Error'})
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()
