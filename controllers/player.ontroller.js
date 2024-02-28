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
  // console.log('Player table created successfully!');
  // Player.create({
  //   first_name: "Rupali",
  //   last_name: "Kadam",
  //   contact: "9323552339",
  //   birth_date: "2003-01-16",
  //   gender: 2,
  //   speciality: 2
  // }).then(res => {
  //   console.log(res)
  // }).catch((error) => {
  //   console.error('Failed to create a new record : ', error);
  // });


  // // console.log('Return Players Record');
  // Player.findAll().then(res => {
  //   console.log(res)
  // }).catch((error) => {
  //   console.error('Failed to retrieve data : ', error);
  // });

  // // console.log('Return Players using ID');
  // Player.findOne({
  //   where: { id: "3" }
  // }).then(res => {
  //   console.log(res)
  // }).catch((error) => {
  //   console.error('Failed to retrieve data : ', error);
  // });

  // // console.log('Destroy Player using ID');
  // Player.destroy({
  //   where: { id: 3 }
  // }).then(() => {
  //   console.log("Successfully deleted record.")
  // }).catch((error) => {
  //   console.error('Failed to delete record : ', error);
  // });


}).catch((error) => {
  console.error('Unable to create table : ', error);
});
