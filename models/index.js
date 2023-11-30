const { Sequelize, DataTypes} = require('sequelize')
const configJson = require("../config.json")
const createStudentModel = require("./student.js")

// Define if we're in production or development.
const env = process.env.NODE_ENV || "development"

// We use sqlite in development and mssql in production.
const config = configJson[env]

// Setup Sequelize with the given config.
const sequelize = new Sequelize(config)

// Setup database object
const database = {
    sequelize : sequelize,
    Sequelize : Sequelize
}

// setup student model for database and store it within the database object.
const studentModel = createStudentModel(sequelize, DataTypes)
const studentModelName = studentModel.name
database[studentModelName] = studentModel

module.exports = database