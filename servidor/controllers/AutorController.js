'use strict';

var utils = require('../utils/writer.js');
var AutorController = require('../service/AutorControllerService');

module.exports.deleteFavoritos = function deleteFavoritos (req, res, next, fav) {
  AutorController.deleteFavoritos(fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAutor = function retrieveAutor (req, res, next) {
  AutorController.retrieveAutor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAutores = function retrieveAutores (req, res, next, id, first_name, last_name, mail) {
  AutorController.retrieveAutores(id, first_name, last_name, mail)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFavoritos = function retrieveFavoritos (req, res, next, fav) {
  AutorController.retrieveFavoritos(fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFavoritos = function updateFavoritos (req, res, next, body, fav) {
  AutorController.updateFavoritos(body, fav)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
