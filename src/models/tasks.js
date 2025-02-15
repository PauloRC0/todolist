const {Model , DataTypes} = require('sequelize')

class Task extends Model { 
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            status: DataTypes.ENUM("em andamento", "finalizado"),
            priority: DataTypes.INTEGER,
            description: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Task