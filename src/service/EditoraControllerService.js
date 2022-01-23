'use strict';
var sql = require('../utils/db.js');

/**
 * Insert Editora
 *
 * body Editora  (optional)
 * returns Editora
 **/
exports.insertEditora = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO editora (nome) values (?)", [body.nome], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }else{
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete Editora
 *
 * id Long 
 * no response value expected for this operation
 **/
 exports.deleteEditora = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM editora WHERE id_editora = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      } else{
        console.log(res);
        resolve({"deleted ":id})
      }
    });
  });
}

/**
 * Retrieve Editora
 *
 * id Long 
 * returns Editora
 **/
exports.retrieveEditora = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM editora WHERE id_editora = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 * Retrieve Editoras
 *
 * returns List
 **/
exports.retrieveEditoras = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM editora", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Update Editora
 *
 * body Editora 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateEditora = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE editora SET nome = ? WHERE id_editora = ?", [body.nome, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}


