# emma-sdk

Node.js wrapper for the [Emma](http://myemma.subaccount(id).com/) API.

## Usage

```js
var Emma = require('emma-sdk');

var emma = new Emma({
  publicKey: "your public key",
  privateKey: "private key"
});
```

You will need to generate your own API access tokens using the settings panel within emma.subaccount(id).

## To Do

* Enhance documentation with extra details and links to the official Emma API documentation
* Add more tests.

## Supported Methods

### Accounts

* emma.account.parent(accountId).list(callback);

### Fields

* emma.subaccount(id).subaccount(id).field.list([params], callback);
* emma.subaccount(id).field.create(details, callback);
* emma.subaccount(id).field.withID(id).details([params], callback);
* emma.subaccount(id).field.withID(id).delete(callback);
* emma.subaccount(id).field.withID(id).clear(callback);
* emma.subaccount(id).field.withID(id).update(details, callback);

### Groups

* emma.subaccount(id).group.list([params], callback);
* emma.subaccount(id).group.create(details, callback);
* emma.subaccount(id).group.withID(id).details(callback);
* emma.subaccount(id).group.withID(id).delete(callback);
* emma.subaccount(id).group.withID(id).members(details, callback);
* emma.subaccount(id).group.withID(id).addMembers(details, callback);
* emma.subaccount(id).group.withID(id).removeMembers(details, callback);
* emma.subaccount(id).group.withID(id).emptySync(details, callback);
* emma.subaccount(id).group.withID(id).empty(details, callback);
* emma.subaccount(id).group.withID(id).copyAllMembersTo(groupID, callback);
* emma.subaccount(id).group.withID(id).addMembersByStatus(details, callback);
* emma.subaccount(id).group.withID(id).update(details, callback);

### Imports

* emma.subaccount(id).import.list(callback);
* emma.subaccount(id).import.withID(id).details(callback);
* emma.subaccount(id).import.withID(id).listMembers(callback);

### Mailings

* emma.subaccount(id).mailing.list([params], callback);
* emma.subaccount(id).mailing.create(details, callback);
* emma.subaccount(id).mailing.validate(details, callback);
* emma.subaccount(id).mailing.withID(id).details(callback);
* emma.subaccount(id).mailing.withID(id).resend(details, callback);
* emma.subaccount(id).mailing.withID(id).update(details, callback);
* emma.subaccount(id).mailing.withID(id).members(callback);
* emma.subaccount(id).mailing.withID(id).delete(callback);
* emma.subaccount(id).mailing.withID(id).cancel(callback);
* emma.subaccount(id).mailing.withID(id).getMessageToMember(id).all(callback);
* emma.subaccount(id).mailing.withID(id).getMessageToMember(id).html(callback);
* emma.subaccount(id).mailing.withID(id).getMessageToMember(id).plaintext(callback);
* emma.subaccount(id).mailing.withID(id).getMessageToMember(id).subject(callback);
* emma.subaccount(id).mailing.withID(id).forwardToMembers(memberID, details, callback);
* emma.subaccount(id).mailing.withID(id).groups(callback);
* emma.subaccount(id).mailing.withID(id).searches(callback);
* emma.subaccount(id).mailing.withID(id).headsup(callback);

### Members

* emma.subaccount(id).member.list([params], callback);
* emma.subaccount(id).member.bulkAdd(details, callback);
* emma.subaccount(id).member.addOne(details, callback);
* emma.subaccount(id).member.signup(details, callback);
* emma.subaccount(id).member.bulkDelete(details, callback);
* emma.subaccount(id).member.bulkUpdatingStatus(details, callback);
* emma.subaccount(id).member.multiRemoveFromGroups(details, callback);
* emma.subaccount(id).member.deleteAll([params], callback);
* emma.subaccount(id).member.withID(id).details([params], callback);
* emma.subaccount(id).member.withID(id).update(details, callback);
* emma.subaccount(id).member.withID(id).getOptOut(callback);
* emma.subaccount(id).member.withID(id).getMailings(callback);
* emma.subaccount(id).member.withID(id).delete(callback);
* emma.subaccount(id).member.withID(id).groups.list(callback);
* emma.subaccount(id).member.withID(id).groups.add(details, callback);
* emma.subaccount(id).member.withID(id).groups.remove(details, callback);
* emma.subaccount(id).member.withID(id).groups.removeAll(callback);
* emma.subaccount(id).member.withEmail(email).details([params], callback);
* emma.subaccount(id).member.withEmail(email).optOut(callback);
* emma.subaccount(id).member.changeStatusFrom(fromStatus).to(toStatus, callback);
* emma.subaccount(id).member.changeStatusFrom(fromStatus).to(toStatus).withConditions(details, callback);

### Responses

* emma.subaccount(id).response.list([params], callback);
* emma.subaccount(id).response.fromMailingID(id).list(callback);
* emma.subaccount(id).response.fromMailingID(id).sends(callback);
* emma.subaccount(id).response.fromMailingID(id).inProgress(callback);
* emma.subaccount(id).response.fromMailingID(id).deliveries(callback);
* emma.subaccount(id).response.fromMailingID(id).opens(callback);
* emma.subaccount(id).response.fromMailingID(id).links(callback);
* emma.subaccount(id).response.fromMailingID(id).clicks(callback);
* emma.subaccount(id).response.fromMailingID(id).forwards(callback);
* emma.subaccount(id).response.fromMailingID(id).optouts(callback);
* emma.subaccount(id).response.fromMailingID(id).signups(callback);
* emma.subaccount(id).response.fromMailingID(id).shares(callback);
* emma.subaccount(id).response.fromMailingID(id).customerShares(callback);
* emma.subaccount(id).response.fromMailingID(id).customerShareClicks(callback);
* emma.subaccount(id).response.fromMailingID(id).shareOverview(callback);
* emma.subaccount(id).response.share(shareID).details(callback);

### Searches

* emma.subaccount(id).search.list(callback);
* emma.subaccount(id).search.create(details, callback);
* emma.subaccount(id).search.withID(id).details(callback);
* emma.subaccount(id).search.withID(id).update(details, callback);
* emma.subaccount(id).search.withID(id).members(callback);
* emma.subaccount(id).search.withID(id).delete(callback);

### Webhooks

* emma.subaccount(id).webhook.list(callback);
* emma.subaccount(id).webhook.events(callback);
* emma.subaccount(id).webhook.create(details, callback);
* emma.subaccount(id).webhook.withID(id).details(callback);
* emma.subaccount(id).webhook.withID(id).update(details, callback);
* emma.subaccount(id).webhook.withID(id).delete(callback);
* emma.subaccount(id).webhook.deleteAll(callback);

### Triggers

* emma.subaccount(id).trigger.list(callback);
* emma.subaccount(id).trigger.create(details, callback);
* emma.subaccount(id).trigger.withID(id).details(callback);
* emma.subaccount(id).trigger.withID(id).update(details, callback);
* emma.subaccount(id).trigger.withID(id).delete(callback);
* emma.subaccount(id).trigger.withID(id).mailings(callback);

