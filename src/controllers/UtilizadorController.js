'use strict';

var utils = require('../utils/writer.js');
var UtilizadorController = require('../service/UtilizadorControllerService');

module.exports.deleteUtilizador = function deleteUtilizador (req, res, next, id) {
  UtilizadorController.deleteUtilizador(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertUtilizador = function insertUtilizador (req, res, next, body) {
  UtilizadorController.insertUtilizador(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUtilizadorId = function retrieveUtilizadorId (req, res, next, id) {
  UtilizadorController.retrieveUtilizadorId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUtilizadores = function retrieveUtilizadores (req, res, next) {
  UtilizadorController.retrieveUtilizadores()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUtilizador = function updateUtilizador (req, res, next, body, id) {
  UtilizadorController.updateUtilizador(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
