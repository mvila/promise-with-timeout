'use strict';

function promiseWithTimeout(promise, timeout) {
  var timeoutPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('Promise not resolved after ' + timeout + ' ms'));
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
};

module.exports = promiseWithTimeout;
