'use strict';
var sql = require('../utils/db.js');

/**
 * Insert Utilizador
 *
 * body Utilizador  (optional)
 * returns Utilizador
 **/
exports.insertUtilizador = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO utilizador (nome) values (?)", [body.nome], function (err, res) {
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
 * Delete Utilizador
 *
 * id Long 
 * no response value expected for this operation
 **/
 exports.deleteUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM utilizador WHERE id_utilizador = ?", [id], function (err, res) {
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
 * Retrieve Utilizador
 *
 * id Long 
 * returns Utilizador
 **/
exports.retrieveUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM utilizador WHERE id_utilizador = ?", [id], function (err, res) {
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
 * Retrieve Utilizadores
 *
 * returns List
 **/
exports.retrieveUtilizadores = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM utilizador", function (err, res) {
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
 * Update Utilizador
 *
 * body Utilizador 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateUtilizador = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE utilizador SET nome = ? WHERE id_utilizador = ?", [body.nome, id], function (err, res) {
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

