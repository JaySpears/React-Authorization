////////////////////////////
// Users Model Definition //
////////////////////////////

class Users {
  constructor(){
    this.Model = 'Users';
    this.Schema = this.Schema.bind(this);
  }

  // Define the model's schema.
  Schema(sequelize, dataType){
    return {
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
    }
  }
}

// New instance of users model.
const users = new Users();

// Export users.
export default users;
