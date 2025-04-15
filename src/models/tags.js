const{Model , DataTypes} = require('sequelize')

class Tag extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            color: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Tag

