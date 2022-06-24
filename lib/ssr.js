'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sm-form.cjs.min.js');
} else {
  module.exports = require('./sm-form.cjs.js');
};
