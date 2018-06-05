module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [5,20]
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordConf: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false
    });
    // User.associate = function(models) {
    //   // Associating User with Deckss
    //   // When an User is deleted, also delete any associated Decks
    //   User.hasMany(models.Deck, {
    //     onDelete: "cascade"
    //   });
    // };
  return User;
  }
  