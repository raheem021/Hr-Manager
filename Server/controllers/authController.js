import USER from "../models/userModel.js";
import { sendWelcomeEmail, sendForgotPasswordMail} from "../emails/emailHandlers.js";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

export const signup = async (req, res) => {
  if (req.user.role !== 'admin' && req.user.role !== 'super-admin') {
    return res.status(403).json({ success: false, errMsg: "Access denied. Admins only." });
  }
  const {
    firstName,
    lastName,
    mobileNumber,
    email,
    dateOfBirth,
    startDate,
    salary,
    password,
    employmentStatus,
    maritalStatus,
    profileImage,
    officeOfEmployment,
    gender,
    address,
    jobTitle,
    confirmPassword,
    department,
  } = req.body;

  try {
    if (
      !firstName ||
      !lastName ||
      !mobileNumber ||
      !email ||
      !dateOfBirth ||
      !maritalStatus ||
      !gender ||
      !address ||
      !officeOfEmployment ||
      !jobTitle ||
      !department ||
      !employmentStatus ||
      !salary ||
      !startDate ||
      !password ||
      !confirmPassword
    ) {
      res.status(400).json({
        success: false,
        errMsg: "all fields are required to register...",
      });
      return;
    }
    if (password !== confirmPassword) {
      res.status(400).json({
        success: false,
        errMsg: "password and confirm password must match",
      });
      return;
    }
    const existingEmail = await USER.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ success: false, errMsg: "Email already exists" });
      return;
    }
    if (!req.files || !req.files.profileImage) {
      return res
        .status(400)
        .json({ success: false, errMsg: "Profile image is required" });
    }

    const result = await cloudinary.uploader.upload(
      req.files.profileImage.tempFilePath,
      {
        use_filename: true,
        folder: "hr_manager",
      }
    );

    req.body.profileImage = result.secure_url;

    fs.unlinkSync(req.files.profileImage.tempFilePath);

    const user = await USER.create({ ...req.body });
    res.status(201).json({
      success: true,
      message: "registration successful welcome mail has been sent",
      user,
    });

    const clientUrl = process.env.CLIENT_URL;
    try {
      await sendWelcomeEmail({
        to: user.email,
        firstName: user.firstName,
        clientUrl,
      });
    } catch (emailError) {
      console.error("Error sending welcome Email", emailError);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      errMsg: "all fields are required to sign in",
    });
    return;
  }

  try {
    // finding a registered email address
    const user = await USER.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, errMsg: "user not found" });
      return;
    }
    // comparing password and validating password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res
        .status(404)
        .json({ success: false, errMsg: "Email or Password is Incorrect" });
      return;
    }
    // generating token

    const token = await user.generateToken();
    // console.log(token);
    if (token) {
      res.status(201).json({
        success: true,
        message: "logged in",
        user: {
          role: user.role,
          email: user.email,
          firstName: user.firstName,
          token,
        },
      });
      return;
    }
  } catch (error) {}
};

export const forgotPassword = async (req,res)=>{
  const {email} =req.body;
  try {
    if (!email){
      res.status(400).json({success:false, errMsg: "input field can not be empty"})
      return;
    }
    const user = await USER.findOne({email});
    if(!user){
      res.status(404).json({success:false, errMsg:"email not found"})
      return
    }
    const resetToken = user.getResetPasswordToken()
   
    
    const resetUrl = process.env.CLIENT_URL_RESET + resetToken;
    
    try {
      await sendForgotPasswordMail({
        to: user.email,
        firstName: user.firstName,
        resetUrl,
      })
      await user.save();
      return res.status(201).json({
        success: true,
        message: "mail sent"
      });

      
    } catch (error) {
      user.getResetPasswordToken = undefined;
      user.getResetPasswordExpire = undefined;
      await user.save();
      return res.status(500).json({errMsg: "Email couldn't be sent", error})
      
    }
  } catch (error) {
    console.log(error);
    
    res.json(error.message)
  }
}