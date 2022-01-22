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
 * body Autor  (optional)
 * returns Autor
 **/
exports.insertAutor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
};
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
 * returns Autor
 **/
exports.retrieveAutorId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_autor" : 7,
  "nome" : "Enid Blyton",
  "nacionalidade" : "Inglesa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Autores
 *
 * returns List
 **/
exports.retrieveAutores = function() {
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
 * Update Autor
 *
 * body Autor 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateAutor = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
