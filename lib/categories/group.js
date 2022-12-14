module.exports = function (client) {
  return {
    subaccount: function (accountId) {
      return {
        // http://api.myemma.com/api/external/groups.html#get--#account_id-groups
        list: function (details, callback) {
          if (typeof callback == 'function')
            client.request({verb: 'GET', url: accountId + '/groups'}, {query: details}, callback);
          else {
            callback = details;
            client.request({verb: 'GET', url: accountId + '/groups'}, {}, callback);
          }
        },
    
        // http://api.myemma.com/api/external/groups.html#post--#account_id-groups
        create: function (details, callback) {
          client.request({verb: 'POST', url: accountId + '/groups'}, {body: details}, callback);
        },
    
        withID: function (id) {
          return {
            // http://api.myemma.com/api/external/groups.html#get--#account_id-groups-#member_group_id
            details: function (callback) {
              client.request({verb: 'GET', url: accountId + '/groups/' + id}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#delete--#account_id-groups-#member_group_id
            delete: function (callback) {
              client.request({verb: 'DELETE', url: accountId + '/groups/' + id}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#get--#account_id-groups-#member_group_id-members
            members: function (details, callback) {
              client.request({verb: 'GET', url: accountId + '/groups/' + id + '/members'}, {query: details}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#put--#account_id-groups-#member_group_id-members
            addMembers: function (details, callback) {
              client.request({verb: 'PUT', url: accountId + '/groups/' + id + '/members'}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#put--#account_id-groups-#member_group_id-members-remove
            removeMembers: function (details, callback) {
              client.request({verb: 'PUT', url: accountId + '/groups/' + id + '/members/remove'}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#delete--#account_id-groups-#member_group_id-members
            emptySync: function (details, callback) {
              client.request({verb: 'DELETE', url: accountId + '/groups/' + id + '/members'}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#delete--#account_id-groups-#member_group_id-members-remove
            empty: function (details, callback) {
              client.request({verb: 'DELETE', url: accountId + '/groups/' + id + '/members/remove'}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#put--#account_id-groups-#from_group_id-#to_group_id-members-copy
            copyAllMembersTo: function (toID, callback) {
              client.request({verb: 'PUT', url: accountId + '/groups/' + id + '/' + toID + '/members/copy'}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/members.html#put--#account_id-members-#group_id-copy
            addMembersByStatus: function (details, callback) {
              client.request({verb: 'PUT', url: accountId + '/members/' + id + '/copy'}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/groups.html#put--#account_id-groups-#member_group_id
            update: function (details, callback) {
              client.request({verb: 'PUT', url: accountId + '/groups/' + id}, {body: details}, callback);
            }
          };
        }
      };
    }
  }
};
