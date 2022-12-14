module.exports = function (client) {
  return {
    subaccount: function (accountId) {
      return {
        // http://api.myemma.com/api/external/members.html#get--#account_id-members
        list: function () {
          var callback, query = {};
          if (arguments.length >= 2) {
            callback = arguments[1];
            query = arguments[0];
          }
          else {
            callback = arguments[0];
          }

          client.request({verb: 'GET', url: accountId + '/members'}, {query: query}, callback);
        },

        // http://api.myemma.com/api/external/members.html#post--#account_id-members
        bulkAdd: function (details, callback) {
          client.request({verb: 'POST', url: accountId + '/members'}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/members.html#post--#account_id-members-add
        addOne: function (details, callback) {
          client.request({verb: 'POST', url: accountId + '/members/add'}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/members.html#post--#account_id-members-signup
        signup: function (details, callback) {
          client.request({verb: 'POST', url: accountId + '/members/signup'}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/members.html#put--#account_id-members-delete
        bulkDelete: function (details, callback) {
          client.request({verb: 'PUT', url: accountId + '/members/delete'}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/members.html#put--#account_id-members-status
        bulkUpdateStatus: function (details, callback) {
          client.request({verb: 'PUT', url: accountId + '/members/status'}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/members.html#put--#account_id-members-groups-remove
        multiRemoveFromGroups: function (details, callback) {
          client.request({verb: 'PUT', url: accountId + '/members/groups/delete'}, {body: details}, callback);
        },

        // http://api.myemma.com/api/external/members.html#delete--#account_id-members
        deleteAll: function () {
          var callback, query = {};
          if (arguments.length >= 2) {
            callback = arguments[1];
            query = arguments[0];
          }
          else {
            callback = arguments[0];
          }

          client.request({verb: 'DELETE', url: accountId + '/members'}, {query: query}, callback);
        },

        withID: function (id) {
          return {
            // http://api.myemma.com/api/external/members.html#get--#account_id-members-#member_id
            details: function () {
              var callback, query = {};
              if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
              }
              else {
                callback = arguments[0];
              }

              client.request({verb: 'GET', url: accountId + '/members/' + id}, {query: query}, callback);
            },

            // http://api.myemma.com/api/external/members.html#put--#account_id-members-#member_id
            update: function (details, callback) {
              client.request({verb: 'PUT', url: accountId + '/members/' + id}, {body: details}, callback);
            },

            // http://api.myemma.com/api/external/members.html#get--#account_id-members-#member_id-optout
            getOptOut: function (callback) {
              client.request({verb: 'GET', url: accountId + '/members/' + id + '/optout'}, {}, callback);
            },

            // http://api.myemma.com/api/external/members.html#get--#account_id-members-#member_id-mailings
            getMailings: function (callback) {
              client.request({verb: 'GET', url: accountId + '/members/' + id + '/mailings'}, {}, callback);
            },

            // http://api.myemma.com/api/external/members.html#delete--#account_id-members-#member_id
            delete: function (callback) {
              client.request({verb: 'DELETE', url: accountId + '/members/' + id}, {body: details}, callback);
            },

            groups: {
              // http://api.myemma.com/api/external/members.html#get--#account_id-members-#member_id-groups
              list: function (callback) {
                client.request({verb: 'GET', url: accountId + '/members/' + id + '/groups'}, {}, callback);
              },

              // http://api.myemma.com/api/external/members.html#put--#account_id-members-#member_id-groups
              add: function (details, callback) {
                client.request({verb: 'PUT', url: accountId + '/members/' + id + '/groups'}, {body: details}, callback);
              },

              // http://api.myemma.com/api/external/members.html#put--#account_id-members-#member_id-groups-remove
              remove: function (details, callback) {
                client.request({verb: 'PUT', url: accountId + '/members/' + id + '/groups/remove'}, {body: details}, callback);
              },

              // http://api.myemma.com/api/external/members.html#delete--#account_id-members-#member_id-groups
              removeAll: function (callback) {
                client.request({verb: 'DELETE', url: accountId + '/members/' + id + '/groups'}, {}, callback);
              }
            }
          };
        },

        withEmail: function (email) {
          return {
            // http://api.myemma.com/api/external/members.html#get--#account_id-members-email--email
            details: function () {
              var callback, query = {};
              if (arguments.length >= 2) {
                callback = arguments[1];
                query = arguments[0];
              }
              else {
                callback = arguments[0];
              }

              client.request({verb: 'GET', url: accountId + '/members/email/' + email}, {query: query}, callback);
            },

            // http://api.myemma.com/api/external/members.html#put--#account_id-members-email-optout--email
            optOut: function (callback) {
              client.request({verb: 'PUT', url: accountId + '/members/email/optout/' + email}, {query: query}, callback);
            }
          };
        },

        // http://api.myemma.com/api/external/members.html#put--#account_id-members-status--status_from-to--status_to
        changeStatusFrom: function (fromStatus) {
          return {
            to: function (toStatus, callback) {
              if (callback) {
                client.request({verb: 'PUT', url: accountId + '/members/status/' + fromStatus + '/to/' + toStatus}, {}, callback);
              }
              else {
                return {
                  withConditions: function (details, callback) {
                    client.request({verb: 'PUT', url: accountId + '/members/status/' + fromStatus + '/to/' + toStatus}, {body: details}, callback);
                  }
                };
              }
            }
          };
        }
      };
    }
  }
};
