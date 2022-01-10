'use strict';

var utils = require('../utils/writer.js');
var LivrosController = require('../service/LivrosControllerService');

module.exports.retrieveLivro = function retrieveLivro (req, res, next, id) {
  LivrosController.retrieveLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivros = function retrieveLivros (req, res, next) {
  LivrosController.retrieveLivros()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLivros = function updateLivros (req, res, next, body, id) {
  LivrosController.updateLivros(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
