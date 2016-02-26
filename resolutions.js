if (Meteor.isClient) {
    Template.body.helpers({
        resolutions: [
            { title: 'Hello Resolutions #1' },
            { title: 'Hello Resolutions #2' },
            { title: 'Hello Resolutions #3' }
        ]
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
