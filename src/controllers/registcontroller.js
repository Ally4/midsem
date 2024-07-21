import mail from '@sendgrid/mail';
import bcrypts from 'bcrypt';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import cloudinary from '../cloudinary/cloudinary';
import Models from '../database/models';
import { encode } from '../utils/jwt';
const fs = require('fs');

const { Op } = require('sequelize');

dotenv.config();
mail.setApiKey(process.env.SENDGRID);
const { Users, results } = Models;

const uploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {folder:'acubed-profil-pictures'});
    return result;
  } catch (error) {
    // console.error('error uploading image to cloudinary', error);
    throw error;
  }
}

function generateRandomAlphanumeric() {
  const alphanumericChars = '0300056789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (result.length < 6) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
    const randomChar = alphanumericChars.charAt(randomIndex);

    if (!result.includes(randomChar)) {
      result += randomChar;
    }
  }
  return result;
}

const randomAlphanumeric = generateRandomAlphanumeric();

class register {
  static async signup(req, res) {
    try {
      const {
        firstName,
        lastName, 
        email,
        phoneNumber,
        armyNumber,
        rank
      } = req.body;
      const id = uuidv4();
      const inSystem = await Users.findOne({
        where: { armyNumber },
      });

      if (inSystem) {
        return res
          .status(409)
          .json({ status: 409, server: res.__('The armyNumber is already in the system') });
      }

      const payload = { armyNumber };
      const accessToken = encode(payload);
      const forgottenMail = {
        to: email,
        from: process.env.EMAIL_FROM,
        subject: 'Welcom to the A force platform',
        html: `<h2> Dear customer we are pleased to give you this OTP to set your password, </h2><h2>Enter the OTP in the application</h2><h1>${randomAlphanumeric}</h1>`,
      };
      mail.send(forgottenMail);

      await Users.create({
        id,
        firstName,
        lastName, 
        email,
        phoneNumber,
        armyNumber,
        rank,
        otp: randomAlphanumeric,
      });
      
      // await Users.update({ isLoggedIn: true },
      //   {where: { user } });

      return res.status(201).json({
        status: 201,
        message: res.__('user created successfully'),
        firstName,
        lastName,
        token: accessToken,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        err: error.message,
      });
    }
  }

  static async otpVerification(req, res) {
    try {
      const {
        otp,
        password,
        confirmPassword
      } = req.body;
      const inSystem = await Users.findOne({
        where: { otp },
      });

      console.log("the user for otp", inSystem, otp)
      if (!inSystem) {
        return res
          .status(400)
          .json({ status: 400, server: res.__('You have unput the wrong OTP') });
      }

      if (password !== confirmPassword) {
        return res
        .status(400)
        .json({ status: 400, server: res.__('The password and confirm password are not the same') });
      }

      const thePassword = bcrypts.hashSync(password, 10);

      await Users.update({ password: thePassword },
        {where: { otp } });
      
      // await Users.update({ isLoggedIn: true },
      //   {where: { user } });

      return res.status(201).json({
        status: 201,
        message: res.__('Successful verification'),
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        err: error.message,
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const isUser = await Users.findOne({
        where: { email },
      });
      if (!isUser) {
        return res.status(404).json({
          status: 404,
          message: 'Wrong email, please enter the registered email.',
        });
      }

      if (!bcrypt.compareSync(password, isUser.password)) {
        return res.status(400).json({
          status: 400,
          message: res.__('One of you credentials must be wrong, please verify your credentials.'),
        });
      }
      const payload = { email };
      const accessToken = encode(payload);

      // Update user
      await Users.update({ isLoggedIn: true },
        {where: { email } });

      const LoggedInUser = await Users.findOne({
        where: { email }
      });

      return res.status(200).json({
        status: 200,
        email: isUser.email,
        name: isUser.firstName,
        message: res.__('logged In successfully'),
        token: accessToken,
        userLoggedIn: LoggedInUser.isLoggedIn
      });
    } catch (error) {
      console.log("the error ===========================", error)
      return res.status(500).json({
        status: 500,
        err: error.message,
      });
    }
  }
  
static async getAllUsers(req, res) {
  try {
    const users = await Users.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    if (!users) return res.status(404).json({
      status: 404,
      message:"No result in the system"
    })
    return res.status(200).json({
      status: 'success',
      data: {
        users,
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
export default register;
