module.exports = function (client) {
  return {
      subaccount: function (accountId) {
          return {
              // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports
              list: function (callback) {
                  client.request({ verb: 'GET', url: accountId + '/subscriptions' }, {}, callback);
              }
          };
      }
  }
};
