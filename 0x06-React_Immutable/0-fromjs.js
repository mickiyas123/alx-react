// import { fromJS } from 'immutable';
const immutable = require('immutable')

function getImmutableObject(objectArg) {
  return immutable.fromJS(objectArg);
}

module.exports =  {getImmutableObject}
