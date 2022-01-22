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
 * Insert Editora
 *
 * body Editora  (optional)
 * returns Editora
 **/
exports.insertEditora = function(body) {
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
 * Retrieve Editora
 *
 * id Long 
 * returns Editora
 **/
exports.retrieveEditora = function(id) {
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
 * Update Editora
 *
 * body Editora 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateEditora = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

