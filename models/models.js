const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Table = sequelize.define('table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATEONLY},
    title: {type: DataTypes.STRING, allowNull: false},
    quantity: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false},
    distance: {type: DataTypes.INTEGER, allowNull: false}
})

module.exports = {
    Table
}