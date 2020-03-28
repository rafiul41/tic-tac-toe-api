const Model = require('./model');

module.exports = {
  getList(query) {
    return Model.find(query)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  },
  addLog(log) {
    return Model.create(log)
      .then(data => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      })
  }
};
