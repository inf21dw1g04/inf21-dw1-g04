'use strict';


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
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 6,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
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
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 6,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
}, {
  "original_title" : "original_title",
  "release_date" : "release_date",
  "genre" : "genre",
  "runtime" : 6,
  "language" : "language",
  "id" : 0,
  "title" : "title",
  "adult" : "adult"
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
exports.updateLivros = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

