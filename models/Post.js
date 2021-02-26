const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    //insert custom functions here
}

//define table columns and how they are configured
Post.init(
    {
        //unique id for each
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING(240),
            allowNull: false
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'post'
    }
);

module.exports = Post;

