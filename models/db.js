const Sequelize = require ('sequelize');

// Conexion a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Seguridad789!', {
    host: 'al17185.systems',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to database:', err);
    });

module.exports = sequelize;