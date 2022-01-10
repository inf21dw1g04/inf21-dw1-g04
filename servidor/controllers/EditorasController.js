'use strict';

var utils = require('../utils/writer.js');
var EditorasController = require('../service/EditorasControllerService');

module.exports.retrieveEditora = function retrieveEditora (req, res, next, id) {
  EditorasController.retrieveEditora(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEditoras = function retrieveEditoras (req, res, next) {
  EditorasController.retrieveEditoras()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEditoras = function updateEditoras (req, res, next, id) {
  EditorasController.updateEditoras(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
