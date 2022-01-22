'use strict';


/**
 * Retrieve Livro based on Autor ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveLivroOnAutor = function(id) {
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

