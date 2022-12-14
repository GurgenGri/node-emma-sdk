<div align="center">

![Emma Logo](https://api.myemma.com/_static/img/logo.png)

[![GurgenGri - node-emma-sdk](https://img.shields.io/static/v1?label=GurgenGri&message=node-emma-sdk&color=blue&logo=github)](https://github.com/GurgenGri/node-emma-sdk "Go to GitHub repo")
[![stars - node-emma-sdk](https://img.shields.io/github/stars/GurgenGri/node-emma-sdk?style=social)](https://github.com/GurgenGri/node-emma-sdk)
[![forks - node-emma-sdk](https://img.shields.io/github/forks/GurgenGri/node-emma-sdk?style=social)](https://github.com/GurgenGri/node-emma-sdk)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - node-emma-sdk](https://img.shields.io/github/issues/GurgenGri/node-emma-sdk)](https://github.com/GurgenGri/node-emma-sdk/issues)

</div>

<hr>

# emma-sdk

Node.js wrapper for the [Emma](http://myemma.com/) API.

## Usage

```js
var Emma = require('emma-sdk');

var emma = new Emma({
  publicKey: "your public key",
  privateKey: "private key"
});
```

### Retrieve Subaccounts

```js
emma.account.parent('parent_account_id').list(function (err, results) {
  // do something
}
```
#### Sample Response

```json
{
    "subaccounts": [
        {
            "account_id": 101,
            "account_name": "Test Account Name",
            "account_status": "active"
        },
        {
            "account_id": 102,
            "account_name": "Test Account Name 2",
            "account_status": "retired"
        }
    ]
}
```

### Retrieve Mailings

```js
emma.mailing.subaccount('subaccount_id').list({}, function (err, results) {
  // do something
}
```

#### Sample Response

```json
[
  {
    "mailing_type": "m",
    "send_started": null,
    "cancel_by_user_id": null,
    "mailing_id": 201,
    "recipient_count": 0,
    "cancel_ts": null,
    "mailing_status": "p",
    "month": null,
    "failure_ts": null,
    "reply_to": null,
    "year": null,
    "datacenter": null,
    "started_or_finished": null,
    "account_id": 100,
    "disabled": false,
    "created_ts": "@D:2013-08-22T09:41:45",
    "sender": "Kevin McConnell",
    "plaintext_only": false,
    "name": "Cancellable mailing",
    "parent_mailing_id": null,
    "failure_message": null,
    "send_finished": null,
    "send_at": null,
    "signup_form_id": null,
    "subject": "Cancellable mailing",
    "purged_at": null,
    "archived_ts": null
  },
  {
    "mailing_type": "m",
    "send_started": null,
    "cancel_by_user_id": null,
    "mailing_id": 200,
    "recipient_count": 0,
    "cancel_ts": null,
    "mailing_status": "c",
    "month": null,
    "failure_ts": null,
    "reply_to": null,
    "year": null,
    "datacenter": null,
    "started_or_finished": null,
    "account_id": 100,
    "disabled": false,
    "created_ts": "@D:2013-08-22T09:41:45",
    "sender": "Kevin McConnell",
    "plaintext_only": false,
    "name": "Sample Mailing",
    "parent_mailing_id": null,
    "failure_message": null,
    "send_finished": null,
    "send_at": null,
    "signup_form_id": null,
    "subject": "Sample Mailing for [% member:first_name %] [% member:last_name %]",
    "purged_at": null,
    "archived_ts": null
  }
]
```

You will need to generate your own API access tokens using the settings panel within emma.

## To Do

* Enhance documentation with extra details and links to the official Emma API documentation
* Add more tests.

## Supported Methods

### Accounts

* emma.account.parent(accountId).list(callback);

### Fields

* emma.field.subaccount(id).list([params], callback);
* emma.field.subaccount(id).create(details, callback);
* emma.field.subaccount(id).withID(id).details([params], callback);
* emma.field.subaccount(id).withID(id).delete(callback);
* emma.field.subaccount(id).withID(id).clear(callback);
* emma.field.subaccount(id).withID(id).update(details, callback);

### Groups

* emma.group.subaccount(id).list([params], callback);
* emma.group.subaccount(id).create(details, callback);
* emma.group.subaccount(id).withID(id).details(callback);
* emma.group.subaccount(id).withID(id).delete(callback);
* emma.group.subaccount(id).withID(id).members(details, callback);
* emma.group.subaccount(id).withID(id).addMembers(details, callback);
* emma.group.subaccount(id).withID(id).removeMembers(details, callback);
* emma.group.subaccount(id).withID(id).emptySync(details, callback);
* emma.group.subaccount(id).withID(id).empty(details, callback);
* emma.group.subaccount(id).withID(id).copyAllMembersTo(groupID, callback);
* emma.group.subaccount(id).withID(id).addMembersByStatus(details, callback);
* emma.group.subaccount(id).withID(id).update(details, callback);

### Imports

* emma.import.subaccount(id).list(callback);
* emma.import.subaccount(id).withID(id).details(callback);
* emma.import.subaccount(id).withID(id).listMembers(callback);

### Mailings

* emma.mailing.subaccount(id).list([params], callback);
* emma.mailing.subaccount(id).create(details, callback);
* emma.mailing.subaccount(id).validate(details, callback);
* emma.mailing.subaccount(id).withID(id).details(callback);
* emma.mailing.subaccount(id).withID(id).resend(details, callback);
* emma.mailing.subaccount(id).withID(id).update(details, callback);
* emma.mailing.subaccount(id).withID(id).members(callback);
* emma.mailing.subaccount(id).withID(id).delete(callback);
* emma.mailing.subaccount(id).withID(id).cancel(callback);
* emma.mailing.subaccount(id).withID(id).getMessageToMember(id).all(callback);
* emma.mailing.subaccount(id).withID(id).getMessageToMember(id).html(callback);
* emma.mailing.subaccount(id).withID(id).getMessageToMember(id).plaintext(callback);
* emma.mailing.subaccount(id).withID(id).getMessageToMember(id).subject(callback);
* emma.mailing.subaccount(id).withID(id).forwardToMembers(memberID, details, callback);
* emma.mailing.subaccount(id).withID(id).groups(callback);
* emma.mailing.subaccount(id).withID(id).searches(callback);
* emma.mailing.subaccount(id).withID(id).headsup(callback);

### Members

* emma.member.subaccount(id).list([params], callback);
* emma.member.subaccount(id).bulkAdd(details, callback);
* emma.member.subaccount(id).addOne(details, callback);
* emma.member.subaccount(id).signup(details, callback);
* emma.member.subaccount(id).bulkDelete(details, callback);
* emma.member.subaccount(id).bulkUpdatingStatus(details, callback);
* emma.member.subaccount(id).multiRemoveFromGroups(details, callback);
* emma.member.subaccount(id).deleteAll([params], callback);
* emma.member.subaccount(id).withID(id).details([params], callback);
* emma.member.subaccount(id).withID(id).update(details, callback);
* emma.member.subaccount(id).withID(id).getOptOut(callback);
* emma.member.subaccount(id).withID(id).getMailings(callback);
* emma.member.subaccount(id).withID(id).delete(callback);
* emma.member.subaccount(id).withID(id).groups.list(callback);
* emma.member.subaccount(id).withID(id).groups.add(details, callback);
* emma.member.subaccount(id).withID(id).groups.remove(details, callback);
* emma.member.subaccount(id).withID(id).groups.removeAll(callback);
* emma.member.subaccount(id).withEmail(email).details([params], callback);
* emma.member.subaccount(id).withEmail(email).optOut(callback);
* emma.member.subaccount(id).changeStatusFrom(fromStatus).to(toStatus, callback);
* emma.member.subaccount(id).changeStatusFrom(fromStatus).to(toStatus).withConditions(details, callback);

### Responses

* emma.response.subaccount(id).list([params], callback);
* emma.response.subaccount(id).fromMailingID(id).list(callback);
* emma.response.subaccount(id).fromMailingID(id).sends(callback);
* emma.response.subaccount(id).fromMailingID(id).inProgress(callback);
* emma.response.subaccount(id).fromMailingID(id).deliveries(callback);
* emma.response.subaccount(id).fromMailingID(id).opens(callback);
* emma.response.subaccount(id).fromMailingID(id).links(callback);
* emma.response.subaccount(id).fromMailingID(id).clicks(callback);
* emma.response.subaccount(id).fromMailingID(id).forwards(callback);
* emma.response.subaccount(id).fromMailingID(id).optouts(callback);
* emma.response.subaccount(id).fromMailingID(id).signups(callback);
* emma.response.subaccount(id).fromMailingID(id).shares(callback);
* emma.response.subaccount(id).fromMailingID(id).customerShares(callback);
* emma.response.subaccount(id).fromMailingID(id).customerShareClicks(callback);
* emma.response.subaccount(id).fromMailingID(id).shareOverview(callback);
* emma.response.subaccount(id).share(shareID).details(callback);

### Searches

* emma.search.subaccount(id).list(callback);
* emma.search.subaccount(id).create(details, callback);
* emma.search.subaccount(id).withID(id).details(callback);
* emma.search.subaccount(id).withID(id).update(details, callback);
* emma.search.subaccount(id).withID(id).members(callback);
* emma.search.subaccount(id).withID(id).delete(callback);

### Webhooks

* emma.webhook.subaccount(id).list(callback);
* emma.webhook.subaccount(id).events(callback);
* emma.webhook.subaccount(id).create(details, callback);
* emma.webhook.subaccount(id).withID(id).details(callback);
* emma.webhook.subaccount(id).withID(id).update(details, callback);
* emma.webhook.subaccount(id).withID(id).delete(callback);
* emma.webhook.subaccount(id).deleteAll(callback);

### Triggers

* emma.trigger.subaccount(id).list(callback);
* emma.trigger.subaccount(id).create(details, callback);
* emma.trigger.subaccount(id).withID(id).details(callback);
* emma.trigger.subaccount(id).withID(id).update(details, callback);
* emma.trigger.subaccount(id).withID(id).delete(callback);
* emma.trigger.subaccount(id).withID(id).mailings(callback);

