module.exports = function (client) {
    return {
      subaccount: function (accountId) {
        return {
          // https://api.myemma.com/api/external/users.html#get--#account_id
          list: function () {
            var callback, query = {};
            if (arguments.length >= 2) {
              callback = arguments[1];
              query = arguments[0];
            }
            else {
              callback = arguments[0];
            }
  
            client.request({verb: 'GET', url: accountId + '/accounts/users'}, {query: query}, callback);
          }
        };
      }
    }
  };
  