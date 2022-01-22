'use strict';

var utils = require('../utils/writer.js');
var AutorController = require('../service/AutorControllerService');

module.exports.deleteAutor = function deleteAutor (req, res, next, id) {
  AutorController.deleteAutor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertAutor = function insertAutor (req, res, next, body) {
  AutorController.insertAutor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAutorId = function retrieveAutorId (req, res, next, id) {
  AutorController.retrieveAutorId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAutores = function retrieveAutores (req, res, next) {
  AutorController.retrieveAutores()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAutor = function updateAutor (req, res, next, body, id) {
  AutorController.updateAutor(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
