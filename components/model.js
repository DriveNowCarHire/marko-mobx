const extendObservable = require('mobx').extendObservable;
const model = extendObservable({}, {
  count : 0,
  name : 'Cameron',
  greeting : 'Hello',
})
global.model = model
module.exports = model
