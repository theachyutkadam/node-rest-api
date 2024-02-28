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


const Player = sequelize.define("players", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_date: {
    type: DataTypes.DATEONLY,
  },
  gender: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  speciality: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

sequelize.sync().then(() => {
  console.log('Player table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
