module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports-#import_id
      list: function (parentAccountId, callback) {
        client.request({verb: 'GET', url: parentAccountId + '/enterprise/subaccounts'}, {}, callback);
      },
    };
  };
    