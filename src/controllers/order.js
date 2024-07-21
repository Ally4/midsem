import { v4 as uuidv4 } from 'uuid';
import Models from '../database/models';
// import mail from '@sendgrid/mail';
import dotenv from 'dotenv';


dotenv.config();

const { orderFromHospitals, Users } = Models;
// class placeTheOrder {
//   static async create(req, res) {
//     try {
//       const {
//         name,
//         author,
//       } = req.body;
//       const id = uuidv4();


//       const orderTest =  await orderFromHospitals.create({
//         id,
//         name,
//         author,
//       });

//       const displayOrderFromHospital = {
//         name,
//         author,
//       };
      
//       return res.status(201).json({
//         status: 201,
//         message: res.__('Book created'),
//         data: displayOrderFromHospital,
//       });
//     } catch (error) {
//       return res.status(500).json({ status: 500, message: error.message });
//     }
//   }

//   static async getAllOrders(req, res) {
//     try {
//       const orders = await orderFromHospitals.findAll();
//       if (!orders) return res.status(404).json({
//         status: 404,
//         message:"No book in the system"
//       })
//       return res.status(200).json({
//         status: 200,
//         data: {
//           name:orders[0].dataValues.name,
//           author:orders[0].dataValues.author,
//         },
//       });
//     } catch (error) {
//       return res.status(500).json({
//         status: 500,
//         err: error.message,
//       });
//     }
//   }
// }




class placeTheOrder {
  static async create(req, res) {
    try {
      const { name, author } = req.body;
      const id = uuidv4();

      const orderTest = await orderFromHospitals.create({
        id,
        name,
        author,
      });

      const displayOrderFromHospital = {
        name,
        author,
      };

      return res.status(201).json({
        status: 201,
        message: res.__('Book created'),
        data: displayOrderFromHospital,
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const orders = await orderFromHospitals.findAll();
      if (!orders) {
        return res.status(404).json({
          status: 404,
          message: "No book in the system"
        });
      }
      return res.status(200).json({
        status: 200,
        data: {
          name: orders[0].dataValues.name,
          author: orders[0].dataValues.author,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        err: error.message,
      });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, author } = req.body;

      const order = await orderFromHospitals.findByPk(id);
      if (!order) {
        return res.status(404).json({
          status: 404,
          message: "Book not found"
        });
      }

      await order.update({ name, author });

      return res.status(200).json({
        status: 200,
        message: res.__('Book updated'),
        data: {
          name: order.name,
          author: order.author,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      console.log()

      const order = await orderFromHospitals.findByPk(id);
      if (!order) {
        return res.status(404).json({
          status: 404,
          message: "Book not found"
        });
      }

      await order.destroy();

      return res.status(200).json({
        status: 200,
        message: res.__('Book deleted'),
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
}






export default placeTheOrder;
