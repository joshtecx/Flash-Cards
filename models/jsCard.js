module.exports = function(sequelize, DataTypes){
    var Jscard = sequelize.define("Jscard",{ 
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hint: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Jscard;
};