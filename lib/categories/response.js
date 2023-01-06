module.exports = function (client) {
  return {
    subaccount: function (accountId) {
      return {
        // http://api.myemma.com/api/external/response.html#get--#account_id-response
        list: function () {
          var callback, query = {};
          if (arguments.length >= 2) {
            callback = arguments[1];
            query = arguments[0];
          }
          else {
            callback = arguments[0];
          }

          client.request({verb: 'GET', url: accountId + 'response'}, {query: query}, callback);
        },

        fromMailingID: function (mailingID) {
          return {
            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id
            list: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-sends
            sends: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/sends'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-in_progress
            inProgress: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/in_progress'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-deliveries
            deliveries: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/deliveries'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-opens
            opens: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/opens'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-links
            links: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/links'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-clicks
            clicks: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/clicks'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-forwards
            forwards: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/forwards'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-optouts
            optouts: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/optouts'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-signups
            signups: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/signups'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-shares
            shares: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/shares'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-customer_shares
            customerShares: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/customer_shares'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-customer_share_clicks
            customerShareClicks: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/customer_share_clicks'}, {}, callback);
            },

            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#mailing_id-shares-overview
            shareOverview: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + mailingID + '/shares/overview'}, {}, callback);
            }
          };
        },

        share: function (shareID) {
          return {
            // http://api.myemma.com/api/external/response.html#get--#account_id-response-#share_id-customer_share
            details: function (callback) {
              client.request({verb: 'GET', url: accountId + 'response/' + shareID + '/customer_share'}, {}, callback);
            }
          };
        }
      };
    }
  }
};
