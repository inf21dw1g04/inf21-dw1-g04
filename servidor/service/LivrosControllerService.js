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
 * Insert Livros
 *
 * returns List
 **/
exports.insertLivros = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
}, {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
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
 * Retrieve Livros
 *
 * id Long 
 * returns Livros
 **/
exports.retrieveLivro = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
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
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
  "id_editora" : 1,
  "id_autor" : 1
}, {
  "titulo" : "Hamlet",
  "ano_publicacao" : 1600,
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
 * Update Livros
 *
 * body Livros 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateLivroId = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

