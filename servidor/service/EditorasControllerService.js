'use strict';


/**
 * Retrieve Editoras
 *
 * id Long 
 * returns Editoras
 **/
exports.retrieveEditora = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
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
    examples['application/json'] = [ "{}", "{}" ];
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
 * id Long 
 * no response value expected for this operation
 **/
exports.updateEditoras = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

