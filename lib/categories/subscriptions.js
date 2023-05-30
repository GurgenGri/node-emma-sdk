module.exports = function (client) {
    return {
        subaccount: function (accountId) {
            return {
                // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings
                list: function () {
                    var callback, query = {};
                    if (arguments.length >= 2) {
                      callback = arguments[1];
                      query = arguments[0];
                    }
                    else {
                      callback = arguments[0];
                    }
          
                    client.request({verb: 'GET', url: accountId + '/subscriptions'}, {query: query}, callback);
                  },
            };
        }
    }
};
