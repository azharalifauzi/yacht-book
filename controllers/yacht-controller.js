const Yacht = require('../models/yacht-model');
const factoryHandler = require('./factory-handler');

exports.deleteYacht = factoryHandler.deleteOne(Yacht);
exports.updateYacht = factoryHandler.updateOne(Yacht);
exports.createYacht = factoryHandler.createOne(Yacht);
exports.getYacht = factoryHandler.getOne(Yacht);
exports.getAllYachts = factoryHandler.getAll(Yacht);
