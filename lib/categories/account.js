module.exports = function (client) {
    return {
      // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports-#import_id
      list: function (callback) {
        client.request({verb: 'GET', url: '/enterprise/subaccounts'}, {}, callback);
      },
    };
  };
    