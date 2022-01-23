'use strict';
var sql = require('../utils/db.js');

/**
 * Insert Livro
 *
 * body Livro  (optional)
 * returns Livro
 **/
exports.insertLivro = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO livro (titulo, ano_publicacao, id_editora, id_autor) values (?,?,?,?)", [body.titulo, body.ano_publicacao, body.id_editora, body.id_autor], function (err, res) {
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
 * Delete Livro
 *
 * id Long 
 * no response value expected for this operation
 **/
 exports.deleteLivro = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM livro WHERE id_livro = ?", [id], function (err, res) {
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
 * Retrieve Livro
 *
 * id Long 
 * returns Livro
 **/
exports.retrieveLivro = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM livro WHERE id_livro = ?", [id], function (err, res) {
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
 * Retrieve Livros
 *
 * returns List
 **/
exports.retrieveLivros = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM livro", function (err, res) {
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
 * Update Livro
 *
 * body Livro 
 * id Long 
 * no response value expected for this operation
 **/

exports.updateLivro = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE livro SET titulo = ?, ano_publicacao = ?, id_editora = ?, id_autor = ? WHERE id_livro = ?", [body.titulo, body.ano_publicacao, body.id_editora, body.id_autor, id], function (err, res) {
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