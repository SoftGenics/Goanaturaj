const express = require("express");
const route = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../database/connection");
const { hasSubscribers } = require("diagnostics_channel");
const { profile } = require("console");

// view all
route.get("/api/allHair", (req, res) => {
  var sql = "SELECT *FROM hair";
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
// Add
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

var upload = multer({ storage: storage });

route.post(
  "/api/addHairProduct",
  upload.single("picture"),
  (req, res, next) => {
    const file = req.file;

    if (!file) {
      return res.status(400).send({ message: "Please upload a file." });
    }
    const p_name = req.body.p_name;
    const p_subname = req.body.p_subname;
    const price = req.body.price;
    const pricetype = req.body.pricetype ?? "rupees";

    const picture = req.file.filename;
    var sql = "INSERT INTO hair VALUES ?";
    const values = [[null, p_name, p_subname, pricetype, price, picture]];
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
);

//single View

route.get("/api/ViewhairProduct/:id", (req, res) => {
  var sql = "SELECT *FROM hair Where id=?";
  db.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

//update

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

var upload = multer({ storage: storage });

route.put("/api/updateHair/:id", upload.single("picture"), (req, res, next) => {
  const p_name = req.body.p_name;
  const p_subname = req.body.p_subname;
  const price = req.body.price;
  const pricetype = req.body.pricetype;
  const picture = req.file?.filename;

  const id = req.params.id;
  var sql = `UPDATE hair SET p_name="${p_name}",p_subname="${p_subname}",pricetype="${pricetype}",price="${price}",picture="${picture}" WHERE id="${id}"`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
//update profile
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },

  filename: function (req, file, cb) {
    cb(null, "uploads");
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

route.put("/upload/:id", async (req, res) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage }).single("profile");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      const id = req.params.id;

      const profile = req.file.filename;
      console.log(profile);
      const sql = `UPDATE hair SET  profile="${profile}" WHERE id="${id}"`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

//delete

route.delete("/api/deletehairProduct/:id", (req, res) => {
  const sql = "DELETE FROM hair WHERE id=?";
  db.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    console.log(result);

    res.send(result);
  });
});

module.exports = route;
