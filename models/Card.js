module.exports = function(sequelize, DataTypes){
    var Card = sequelize.define("Card",{ 
        deck_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        hint: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        question2: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        hint2: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        answer2: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        question3: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        hint3: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        answer3: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        question4: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        hint4: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        answer4: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        question5: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        hint5: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        answer5: {
            type: DataTypes.STRING,
            // allowNull: false
        }
    }, {
        timestamps: false
    });
    return Card;
};