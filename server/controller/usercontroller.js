const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const db = require("../database/connection");

const { Route } = require("express");

exports.user = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const number = req.body.number;
  const name = req.body.name;

  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }
  db.query(
    "SELECT * FROM user WHERE email = ? ",
    [email],
    function (error, results, fields) {
      if (error) {
        res.status(500).send({ message: error });
        return;
      }
      if (!results) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      } else {
        var sql = "INSERT INTO user VALUES ?";
        const values = [[null, email, name, number, password]];
        console.log(values);
        db.query(sql, [values], (err, results, fields) => {
          if (err) {
            console.log(err);
          }
          {
            console.log("inserted", results);

            res.end();
          }
        });
      }
    }
  );
};

exports.loginAdmin = (request, response) => {
  // Capture the input fields
  let email = request.body.email;
  let password = request.body.password;

  db.query(
    "SELECT * FROM UserTable WHERE email = ? ",
    [email],
    function (error, results, fields) {
      if (results[0].password) {
        bcrypt.compare(
          request.body.password,
          results[0].password,
          function (err, result) {
            console.log(">>>>>> ", password);
            console.log(">>>>>> ", results[0].password);
            if (result) {
              const token = jwt.sign({ id: results.id }, process.env.JWT_KEY, {
                expiresIn: 86400, // 24 hours
              });

              //srequest.session.token = token;
              return response.status(200).send({
                id: results[0].id,
                name: results[0].name,
                token: token,
              });
            } else {
              return response.status(400).send();
            }
          }
        );
      }
    }
  );
};
// view all
exports.getuser = (req, res) => {
  var sql = "SELECT *FROM user";
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

// address
exports.useraddress = (req, res) => {
  const userId = req.body.userId;
  const fullname = req.body.fullname;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const postcode = req.body.postcode;

  const sql = "INSERT INTO address VALUES ?";
  const values = [
    [null, userId, fullname, address, city, state, postcode, phone, email],
  ];
  console.log(values);
  db.query(sql, [values], (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    {
      console.log("inserted", results);

      res.end();
    }
  });
};
// view address
exports.getaddress = (req, res) => {
  const sql = "SELECT *FROM address";
  db.query(sql, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

// vidate request
//update user address
exports.updateaddress = (req, res) => {
  if (!req.file) {
    return res.send("Please select an image to upload");
  } else {
    const userId = req.body.userId;
    const fullname = req.body.fullname;

    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const postcode = req.body.postcode;

    const phone = req.body.phone;
    const email = req.body.email;
    var sql = `UPDATE product SET userId="${userId}",fullname="${fullname}",address="${address}",city="${city}",state="${state}",postcode="${postcode}",phone="${phone}",email="${email}" WHERE id="${id}"`;

    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  }
};

exports.updateaddress = (req, res) => {
  if (!req.file) {
    return res.send("Please select an image to upload");
  } else {
    const userId = req.body.userId;
    const fullname = req.body.fullname;

    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const postcode = req.body.postcode;

    const phone = req.body.phone;
    const email = req.body.email;
    var sql = `UPDATE product SET userId="${userId}",fullname="${fullname}",address="${address}",city="${city}",state="${state}",postcode="${postcode}",phone="${phone}",email="${email}" WHERE id="${id}"`;

    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  }
};

//delete
exports.delete = (req, res) => {};
