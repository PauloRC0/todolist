'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable('tasks', { 
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("em andamento", "finalizado"),
    allowNull: false,
  },
  priority: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 10,
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});
     
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('tasks');
    
  }
};
