/**
 * function usersModel, define model schema
 * for Users.
 *
 * @param  {Object} sequelize
 * @param  {String} dataType  
 * @return {Object} schema
 */
function usersModel(sequelize, dataType){
  let schema = sequelize.define('Users', {
    id: {
      type: dataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: dataType.STRING,
      allowNull: false,
    },
    password: {
      type: dataType.STRING,
      allowNull: false,
    },
    first_name: {
      type: dataType.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataType.STRING,
      validate: {
        isInt: true,
        notNull: true
      }
    }
  });
  return schema;
}

// Export model.
export default usersModel;
