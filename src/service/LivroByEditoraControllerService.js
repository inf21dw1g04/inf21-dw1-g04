'use strict';


/**
 * Retrieve Livro based on Editora ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveLivroOnEditora = function(id) {
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

