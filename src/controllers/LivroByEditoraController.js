'use strict';

var utils = require('../utils/writer.js');
var LivroByEditoraController = require('../service/LivroByEditoraControllerService');

module.exports.retrieveLivroOnEditora = function retrieveLivroOnEditora (req, res, next, id) {
  LivroByEditoraController.retrieveLivroOnEditora(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
