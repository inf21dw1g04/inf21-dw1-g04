'use strict';


/**
 * Delete Favoritos
 *
 * fav Long 
 * no response value expected for this operation
 **/
exports.deleteFavoritos = function(fav) {
  return new Promise(function(resolve, reject) {
    resolve();
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
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
}, {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
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
 * first_name String 
 * last_name String 
 * mail String 
 * returns Autor
 **/
exports.retrieveAutores = function(id,first_name,last_name,mail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mail" : "mail",
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Favoritos
 *
 * fav Long 
 * returns Livros
 **/
exports.retrieveFavoritos = function(fav) {
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
 * Update Favoritos
 *
 * body Livros 
 * fav Long 
 * no response value expected for this operation
 **/
exports.updateFavoritos = function(body,fav) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

