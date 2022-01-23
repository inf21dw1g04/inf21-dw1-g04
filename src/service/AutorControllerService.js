'use strict';
var sql = require('../utils/db.js');

/**
 * Insert Autor
 *
 * body Autor  (optional)
 * returns Autor
 **/
exports.insertAutor = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO autor (nome, nacionalidade) values (?,?)", [body.nome, body.nacionalidade], function (err, res) {
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
 * Delete Autor
 *
 * id Long 
 * no response value expected for this operation
 **/
 exports.deleteAutor = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM autor WHERE id_autor = ?", [id], function (err, res) {
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
 * Retrieve Autor
 *
 * id Long 
 * returns Autor
 **/
exports.retrieveAutor = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM autor WHERE id_autor = ?", [id], function (err, res) {
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
 * Retrieve Autores
 *
 * returns List
 **/
exports.retrieveAutores = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM autor", function (err, res) {
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
 * Update Autor
 *
 * body Autor 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAutor = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE autor SET nome = ?, nacionalidade = ? WHERE id_autor = ?", [body.nome, body.nacionalidade, id], function (err, res) {
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

