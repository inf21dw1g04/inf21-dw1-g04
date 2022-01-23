'use strict';


/**
 * Delete Livro
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteLivro = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Insert Livro
 *
 * body Livro  (optional)
 * returns Livro
 **/
exports.insertLivro = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "titulo" : "titulo",
  "ano_publicacao" : "ano",
  "id_editora" : 1,
  "id_autor" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "titulo" : "titulo",
  "ano_publicacao" : "ano",
  "id_editora" : 1,
  "id_autor" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Livros
 *
 * returns List
 **/
exports.retrieveLivros = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "titulo" : "titulo",
  "ano_publicacao" : "ano",
  "id_editora" : 1,
  "id_autor" : 1
}, {
  "titulo" : "titulo",
  "ano_publicacao" : "ano",
  "id_editora" : 1,
  "id_autor" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

