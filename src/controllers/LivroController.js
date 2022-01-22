'use strict';

var utils = require('../utils/writer.js');
var LivroController = require('../service/LivroControllerService');

module.exports.deleteLivro = function deleteLivro (req, res, next, id) {
  LivroController.deleteLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertLivro = function insertLivro (req, res, next, body) {
  LivroController.insertLivro(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivro = function retrieveLivro (req, res, next, id) {
  LivroController.retrieveLivro(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLivros = function retrieveLivros (req, res, next) {
  LivroController.retrieveLivros()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLivroId = function updateLivroId (req, res, next, body, id) {
  LivroController.updateLivroId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
