import { v4 as uuidv4 } from 'uuid';
import mail from '@sendgrid/mail';
import dotenv from 'dotenv';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import Models from '../database/models';

import cloudinary from '../cloudinary/cloudinary';

dotenv.config();

const { products } = Models;

const uploadToCloudinary = (fileBuffer, folder) => new Promise((resolve, reject) => {
  cloudinary.uploader.upload_stream(
    { resource_type: 'raw', folder },
    (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    },
  ).end(fileBuffer);
});


let lastInvocationTime = null;

const { Op } = require('sequelize');

class Products {
  static async create(req, res) {
    try {

      // var currentDate = new Date();
      const {
        name,
        price,
        shop,
      } = req.body;

      const id = uuidv4();
      
      // const { user } = req.params;

      if (!req.files.image) {
        return res.status(400).json({
          status: 400,
          message: "Image files are required.",
        });
      }

      lastInvocationTime = new Date();
      // const pdfResult = await uploadToCloudinary(req.files.pdf[0].buffer, 'acubed-results-pdf');
      const imageResult = await uploadToCloudinary(req.files.image[0].buffer, 'a-force-products-image');

      const record = await products.create({
        id,
        name,
        price,
        shop,
        image: imageResult.secure_url,
      });
      

      return res.status(201).json({
        status: 201,
        message: res.__('The result was sent successfully'),
        data: record,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        err: error.message,
      });
    }
  }


  static async getAllProducts(req, res) {
    try {
      const data = await products.findAll();
      if (!data) return res.status(404).json({
        status: 404,
        message:"No result in the system"
      })
  
      return res.status(200).json({
        status: 'success',
        data: {
          data,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        err: error.message,
      });
    }
  }
}

export default Products;



