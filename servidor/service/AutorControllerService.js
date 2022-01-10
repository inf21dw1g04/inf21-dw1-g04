'use strict';


/**
 * Delete Autor
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAutor = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Insert Autor
 *
 * returns List
 **/
exports.insertAutor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
}, {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Autor
 *
 * returns List
 **/
exports.retrieveAutor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
}, {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Autor
 *
 * id Long 
 * returns Livros
 **/
exports.retrieveAutorId = function(id) {
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
 * Update Autor
 *
 * body Livros 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAutor = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

