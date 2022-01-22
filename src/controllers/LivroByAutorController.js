'use strict';

var utils = require('../utils/writer.js');
var LivroByAutorController = require('../service/LivroByAutorControllerService');

module.exports.retrieveLivroOnAutor = function retrieveLivroOnAutor (req, res, next, id) {
  LivroByAutorController.retrieveLivroOnAutor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
