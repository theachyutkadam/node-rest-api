import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
 'node_rest_api_development',
 'root',
 'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


const User = sequelize.define("users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

sequelize.sync().then(() => {
  console.log('User table created successfully!');
  return User
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
