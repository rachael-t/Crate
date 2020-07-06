module.exports = {
  up: (queryInterface, Sequelize) => {
    // This is creating the table on the database
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // This allows us to remove the table here
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}

// We'll need to add a database migration here to add on the desired attributes for the user