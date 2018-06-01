module.exports = function(sequelize, DataTypes){
    var Csscard = sequelize.define("Csscard",{ 
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
    return Csscard;
};