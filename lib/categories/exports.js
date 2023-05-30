module.exports = function (client) {
    return {
        subaccount: function (accountId) {
            return {
                // http://api.myemma.com/api/external/members.html#get--#account_id-members-imports
                export: function (callback) {
                    client.request({ verb: 'POST', url: accountId + '/exports' }, {}, callback);
                },
                withID: function (id) {
                    return {
                        status: function (callback) {
                            client.request({ verb: 'GET', url: accountId + '/exports/' + id}, {}, callback);
                        },
                        download: function (callback) {
                            client.request({ verb: 'GET', url: accountId + '/exports/' + id + '/download' }, {}, callback);
                        }
                    }
                }
            };
        }
    }
};
