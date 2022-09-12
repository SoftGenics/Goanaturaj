const express = require("express");
const route = express.Router();

const path = require("path");
const db = require("../database/connection");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const { profile } = require("console");
var fs = require("fs");

const { v4: uuidv4 } = require("uuid");
const postmark = require("postmark");
const dotenv = require("dotenv");
dotenv.config({ path: "././config.env" });

const controller2 = require("../controller/usercontroller");
const protect = require("../middleware/verify");

var client = new postmark.ServerClient(process.env.POSTMARK_TOKEN);

route.post("/api/users", controller2.user);

route.post("/api/userlogin", controller2.loginAdmin);

route.get("/api/allUser", protect, controller2.getuser);
route.post("/api/addUser", (req, res, next) => {
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 8);
  const number = req.body.number;
  const name = req.body.name;
  const address = "address 1";

  const verifyEmail = false;
  const verificationLink = uuidv4();

  let sql = "SELECT * FROM UserTable Where email=? ";
  db.query(sql, [email], function (err, result) {
    if (result.length != 0) {
      res.send({
        message: "user already exist in database with current email ",
      });
    } else {
      sql = "INSERT INTO UserTable VALUES ?";
      const values = [
        [
          null,
          email,
          name,
          number,
          password,
          address,
          verifyEmail,
          verificationLink,
        ],
      ];

      db.query(sql, [values], async (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          console.log("inserted", results);

          try {
            //send mail
            // await client.sendEmail({
            //   From: process.env.USER_EMAIL,
            //   To: email,
            //   Subject: "Verify email for goa natural account",
            //   HtmlBody: `<a>http://localhost:3000/verifyEmail?email=${email}&verificationLink=${verificationLink} </a>`,
            //   //TextBody: `http://localhost:3000/verifyEmail?email=${email}&verificationLink=${verificationLink}`,
            //   MessageStream: "outbound",
            // });

            client.sendEmailWithTemplate({
              From: process.env.USER_EMAIL,
              To: email,
              TemplateAlias: "welcome-1",
              TemplateModel: {
                product_url: "https://golden.softgenics.in",
                product_name: "Goa Natural",
                name: name,
                action_url: `http://localhost:3000/verifyEmail?email=${email}&verificationLink=${verificationLink}`,
                login_url: "https://golden.softgenics.in",
                username: name,
                support_email: "goanatural2222@gmail.com",
                sender_name: "Goa natural",
                company_name: "Goa natural",
                company_address:
                  "Plot 34, Kakoda Industrial Estate – Phase III, Kakoda, Curchorem, Goa, India 403706",
              },
            });

            console.log("it has send");

            res.send({
              message:
                "Verification email is send, Go to your email to verify account and check your spam folder, if you don't see the email",
            });

            // let mailTransporter = nodemailer.createTransport({
            //   host: process.env.HOST,
            //   //   service: process.env.SERVICE,
            //   port: Number(process.env.EMAIL_PORT),
            //   security: process.env.SECURITY,
            //   pool: true,
            //   auth: {
            //     user: process.env.USER_EMAIL,
            //     pass: process.env.PASS,
            //   },
            // });
            // let details = {
            //   from: process.env.USER_EMAIL,
            //   to: email,
            //   subject: "Verify email for goa natural account",
            //   text: `<a>https://goanatural.softgenics.in/verifyEmail?email=${email}&verificationLink=${verificationLink} </a>`,
            // };
            // mailTransporter.sendMail(details, (err) => {
            //   if (err) {
            //     console.log("it has an error,err", err);
            //     res.send({
            //       message:
            //         "The email that entered is wrong, not able to send verification link ",
            //     });
            //   } else {
            //     console.log("it has send");
            //     res.send({
            //       message:
            //         "Verification email is send, Go to your email to verify account and check your spam folder, if you don't see the email",
            //     });
            //   }
            // });
          } catch (error) {
            console.log("email not sent!");
            console.log(error);
            res.send({
              message:
                "The email that entered is wrong, not able to send verification link ",
            });
          }
        }
      });
    }
  });
});

route.post("/api/verifyEmail", (req, res, next) => {
  const email = req.body.email;
  const verifyLink = req.body.verifyLink;

  let sql = `SELECT * FROM UserTable Where email="${email}" and verificationLink="${verifyLink}"`;
  db.query(sql, function (err, result) {
    if (err) {
      res.send({
        status: false,
        message: "user email or verification link is wrong",
      });
      throw err;
    } else {
      console.log(result);

      if (result.length === 1) {
        sql = `UPDATE UserTable SET verifyEmail = true WHERE email="${email}" and verificationLink="${verifyLink}"`;
        db.query(sql, function (err, result) {
          if (err) {
            res.send({
              status: false,
              message: "Unable to update verification",
            });
            throw err;
          } else {
            res.send({
              status: true,
              message: "User email is verified...",
            });
          }
        });
      }
    }
  });
});

route.post("/api/adduseraddress", controller2.useraddress);
route.get("/api/useraddress", controller2.getaddress);

module.exports = route;
