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
    
          client.request({verb: 'GET', url: accountId + '/mailings'}, {query: query}, callback);
        },
    
        // http://api.myemma.com/api/external/mailings.html#post--#account_id-mailings
        create: function (details, callback) {
          client.request({verb: 'POST', url: accountId + '/mailings'}, {body: details}, callback);
        },
    
        // http://api.myemma.com/api/external/mailings.html#post--#account_id-mailings-validate
        validate: function (details, callback) {
          client.request({verb: 'POST', url: accountId + '/mailings/validate'}, {body: details}, callback);
        },
    
        withID: function (id) {
          return {
            // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings-#mailing_id
            details: function (callback) {
              client.request({verb: 'GET', url: accountId + '/mailings/' + id}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#post--#account_id-mailings-#mailing_id
            resend: function (details, callback) {
              client.request({verb: 'POST', url: accountId + '/mailings/' + id}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#put--#account_id-mailings-#mailing_id
            update: function (details, callback) {
              client.request({verb: 'PUT', url: accountId + '/mailings/' + id}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings-#mailing_id-members
            members: function (callback) {
              client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/members'}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#delete--#account_id-mailings-#mailing_id
            delete: function (callback) {
              client.request({verb: 'DELETE', url: accountId + '/mailings/' + id + '/members'}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#delete--#account_id-mailings-cancel-#mailing_id
            cancel: function (callback) {
              client.request({verb: 'DELETE', url: accountId + '/mailings/cancel/' + id + '/members'}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings-#mailing_id-messages-#member_id
            getMessageToMember: function (memberID) {
              return {
                all: function () {
                  client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/messages/' + memberID}, {query: {type: 'all'}}, callback);
                },
    
                html: function () {
                  client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/messages/' + memberID}, {query: {type: 'html'}}, callback);
                },
    
                plaintext: function () {
                  client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/messages/' + memberID}, {query: {type: 'plaintext'}}, callback);
                },
    
                subject: function () {
                  client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/messages/' + memberID}, {query: {type: 'subject'}}, callback);
                }
              };
            },
    
            // http://api.myemma.com/api/external/mailings.html#post--#account_id-forwards-#mailing_id-#member_id
            forwardToMembers: function (memberID, details, callback) {
              client.request({verb: 'GET', url: accountId + '/forwards/' + id + '/' + memberID}, {body: details}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings-#mailing_id-groups
            groups: function (callback) {
              client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/groups'}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings-#mailing_id-searches
            searches: function (callback) {
              client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/searches'}, {}, callback);
            },
    
            // http://api.myemma.com/api/external/mailings.html#get--#account_id-mailings-#mailing_id-headsup
            headsup: function (callback) {
              client.request({verb: 'GET', url: accountId + '/mailings/' + id + '/headsup'}, {}, callback);
            }
          };
        }
      };
    }
  }
};
