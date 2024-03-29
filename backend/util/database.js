const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("conduit", "root", "1234", {
  dialect: "mysql",
  host: "mysql-db",
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`DB Connected`.cyan.underline.bold);
  } catch (error) {
    console.error("Unable to connect to the database:".red.bold, error);
  }
};

checkConnection();

module.exports = sequelize;
