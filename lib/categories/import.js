module.exports = function (client) {
  return {
    subaccount: function (accountId) {
      return {
        // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports
        list: function (callback) {
          client.request({verb: 'GET', url: accountId + '/members/imports'}, {}, callback);
        },
    
        withID: function (id) {
          return {
            // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports-#import_id
            details: function (callback) {
              client.request({verb: 'GET', url: accountId + '/members/imports/' + id}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports-#import_id-members
            listMembers: function (callback) {
              client.request({verb: 'GET', url: accountId + '/members/imports/' + id + '/members'}, {}, callback);
            }
          };
        }
      };
    }
  }
};
