// import { fromJS } from 'immutable';
const immutable = require('immutable');

function getImmutableObject(object) {
  return immutable.fromJS(object);
}

module.exports = { getImmutableObject };
