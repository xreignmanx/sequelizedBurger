
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return burger;
};
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
}
