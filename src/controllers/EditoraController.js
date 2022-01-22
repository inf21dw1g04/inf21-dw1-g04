'use strict';

var utils = require('../utils/writer.js');
var EditoraController = require('../service/EditoraControllerService');

module.exports.deleteEditora = function deleteEditora (req, res, next, id) {
  EditoraController.deleteEditora(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertEditora = function insertEditora (req, res, next, body) {
  EditoraController.insertEditora(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEditora = function retrieveEditora (req, res, next, id) {
  EditoraController.retrieveEditora(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEditoras = function retrieveEditoras (req, res, next) {
  EditoraController.retrieveEditoras()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEditora = function updateEditora (req, res, next, body, id) {
  EditoraController.updateEditora(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
