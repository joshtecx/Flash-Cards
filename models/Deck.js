module.exports = function(sequelize, DataTypes){
    var Deck = sequelize.define("Deck",{ 
        deck_name: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    },{
        timestamps: false
    });
    return Deck;
};