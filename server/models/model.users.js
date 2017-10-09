/**
 * function usersModel, define model schema
 * for Users.
 *
 * @param  {Object} sequelize
 * @param  {String} dataType
 * @return {Object} Users
 */
function usersModel(sequelize, dataType){
  const Users = sequelize.define('Users', {
    id: {
      type: dataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: dataType.STRING,
      allowNull: false
    },
    password: {
      type: dataType.STRING,
      allowNull: false
    },
    first_name: {
      type: dataType.STRING,
      allowNull: false
    },
    last_name: {
      type: dataType.STRING,
      allowNull: false
    }
  });
  return Users;
}

// Export model.
export default usersModel;
