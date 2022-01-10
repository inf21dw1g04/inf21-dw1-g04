'use strict';


/**
 * Delete Editora
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteEditora = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Insert Editoras
 *
 * returns List
 **/
exports.insertEditoras = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_editora" : 11,
  "nome" : "Soho Press"
}, {
  "id_editora" : 11,
  "nome" : "Soho Press"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Editoras
 *
 * returns List
 **/
exports.retrieveEditoras = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_editora" : 11,
  "nome" : "Soho Press"
}, {
  "id_editora" : 11,
  "nome" : "Soho Press"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Editoras
 *
 * id Long 
 * returns Editoras
 **/
exports.retrieveEditorasId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_editora" : 11,
  "nome" : "Soho Press"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Editoras
 *
 * body Editoras 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateEditoras = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

