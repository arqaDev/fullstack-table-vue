const { Table } = require('../models/models')


class TableController {
    async post(req, res) {
        const name = req.body
        const table = await Table.create(name)
        return res.json(table)
    }

    async get(req, res) {
        const tables = await Table.findAll()
        return res.json(tables)
    }
}

module.exports = new TableController()