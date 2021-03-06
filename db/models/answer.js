'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer_body: DataTypes.STRING,
    user_id: DataTypes.STRING,
    question_id: DataTypes.STRING
  }, {});
  Answer.associate = function(models) {
    const columnMapping = {
      through: "Answer_like",
      foreignKey: "answer_id",
      otherKey: "user_id"
    }

    Answer.belongsTo(models.Question, { foreignKey: "question_id" });
    Answer.belongsToMany(models.User, columnMapping);
    Answer.hasMany(models.Answer_like, {foreignKey: "answer_id"})
  };
  return Answer;
};