'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('results', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn('uuid_generate_v4')
      },      
      // patientId: {
      //   type: Sequelize.UUID,
      //   allowNull: false,
      //   primaryKey: false,
      //   default: Sequelize.fn('uuid_generate_v4')
      // },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      pdf: {
        type: Sequelize.STRING
      }, 
      image: {
        type: Sequelize.STRING
      },   
      status: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      lastTime: {
        type: Sequelize.DATE,
        default: "2024-02-11 17:06:24.937+02"
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('results');
  }
};



// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const currentDate = new Date();
//     const thePatientId = currentDate.getFullYear() +
//       (currentDate.getMonth() + 1).toString().padStart(2, '0') +
//       currentDate.getDate().toString().padStart(2, '0');
//       console.log("=============================== the patient id", thePatientId)

//     await queryInterface.createTable('results', {
//       id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true,
//         default: Sequelize.fn('uuid_generate_v4')
//       },
//       patientId: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//         defaultValue: thePatientId,
//         primaryKey: true
//       },
//       name: {
//         type: Sequelize.STRING,
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       phoneNumber: {
//         type: Sequelize.STRING
//       },
//       address: {
//         type: Sequelize.STRING
//       },
//       diagnosis: {
//         type: Sequelize.STRING
//       },
//       pdf: {
//         type: Sequelize.STRING
//       },
//       image: {
//         type: Sequelize.STRING
//       },
//       status: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('results');
//   }
// };


// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('results', {
//       id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true,
//         default: Sequelize.fn('uuid_generate_v4')
//       },
//       patientId: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//         primaryKey: true
//       },
//       name: {
//         type: Sequelize.STRING,
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       phoneNumber: {
//         type: Sequelize.STRING
//       },
//       address: {
//         type: Sequelize.STRING
//       },
//       diagnosis: {
//         type: Sequelize.STRING
//       },
//       pdf: {
//         type: Sequelize.STRING
//       },
//       image: {
//         type: Sequelize.STRING
//       },
//       status: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });

//     const currentDate = new Date();
//     const thePatientId = currentDate.getFullYear() +
//       (currentDate.getMonth() + 1).toString().padStart(2, '0') +
//       currentDate.getDate().toString().padStart(2, '0');

//     await queryInterface.sequelize.query(`ALTER TABLE results ADD COLUMN IF NOT EXISTS patientId DEFAULT '${thePatientId}'`);
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('results');
//   }
// };



// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('results', {
//       id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true,
//         default: Sequelize.fn('uuid_generate_v4')
//       },
//       patientId: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//         // primaryKey: true,
//         defaultValue: () => {
//           const currentDate = new Date();
//           return currentDate.getFullYear() +
//             (currentDate.getMonth() + 1).toString().padStart(2, '0') +
//             currentDate.getDate().toString().padStart(2, '0');
//         }
//       },
//       name: {
//         type: Sequelize.STRING,
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       phoneNumber: {
//         type: Sequelize.STRING
//       },
//       address: {
//         type: Sequelize.STRING
//       },
//       diagnosis: {
//         type: Sequelize.STRING
//       },
//       pdf: {
//         type: Sequelize.STRING
//       },
//       image: {
//         type: Sequelize.STRING
//       },
//       status: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('results');
//   }
// };








// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('results', {
//       id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true,
//         default: Sequelize.fn('uuid_generate_v4')
//       },
//       patientId: {
//         type: Sequelize.STRING,
//         // allowNull: false,
//         unique: true,
//         // primaryKey: true,
//       },
//       name: {
//         type: Sequelize.STRING,
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       phoneNumber: {
//         type: Sequelize.STRING
//       },
//       address: {
//         type: Sequelize.STRING
//       },
//       diagnosis: {
//         type: Sequelize.STRING
//       },
//       pdf: {
//         type: Sequelize.STRING
//       },
//       image: {
//         type: Sequelize.STRING
//       },
//       status: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });

//     const currentDate = new Date();
//     const thePatientId = currentDate.getFullYear() +
//       (currentDate.getMonth() + 1).toString().padStart(2, '0') +
//       currentDate.getDate().toString().padStart(2, '0');

//     await queryInterface.sequelize.query(`ALTER TABLE results ALTER COLUMN patientId SET DEFAULT '${thePatientId}'`);
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('results');
//   }
// };

