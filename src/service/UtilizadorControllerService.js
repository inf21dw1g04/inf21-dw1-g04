'use strict';


/**
 * Delete Utilizador
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Insert Utilizador
 *
 * body Utilizador  (optional)
 * returns Utilizador
 **/
exports.insertUtilizador = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_editora" : 4,
  "nome" : "Luís Macedo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Utilizador
 *
 * id Long 
 * returns Utilizador
 **/
exports.retrieveUtilizadorId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_editora" : 4,
  "nome" : "Luís Macedo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Utilizadores
 *
 * returns List
 **/
exports.retrieveUtilizadores = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_editora" : 4,
  "nome" : "Luís Macedo"
}, {
  "id_editora" : 4,
  "nome" : "Luís Macedo"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

