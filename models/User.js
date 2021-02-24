const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    //set up password verification here/ use bcrypt
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define table columns and how they are configured
User.init(
    {
        //unique id for each user
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //username
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        //email
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //password
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //must be longer than 8 characters
                len: [8]
            }
        },
        //homepage preferences/ references certain moduar handlebars partials to create individualized user experiences
        modulars: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        hooks: {
            //before sending password data to database, stop the information and encrypt here before sending
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
