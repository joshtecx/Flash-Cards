module.exports = function(sequelize, DataTypes){
    var Deck = sequelize.define("Deck",{ 
        deck_name: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    },{
        timestamps: false
    });
    // Deck.associate = function(models) {
    //     //deck should belong to user
    //     //deck cannot be created without a user
    //     Deck.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Deck;
};