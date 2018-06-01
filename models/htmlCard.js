module.exports = function(sequelize, DataTypes){
    var Htmlcard = sequelize.define("Htmlcard",{ 
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
    return Htmlcard;
};