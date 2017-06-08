Package.describe({
  name: 'hbsion:roles',
  // version: '0.0.1',
  // // Brief, one-line summary of the package.
  // summary: '',
  // // URL to the Git repository containing the source code for this package.
  // git: '',
  // // By default, Meteor will default to using README.md for documentation.
  // // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  summary: "Authorization package for Meteor",
  version: "1.0.0",
  git: "https://github.com/hbsion/meteor-roles.git",
});

Package.onUse(function (api) {
  var both = ['client', 'server'];

  api.versionsFrom("METEOR@1.4.1");

  api.use(['underscore',
           'accounts-base',
           'tracker',
           'mongo',
           'check'], both);

  api.use(['blaze'], 'client', {weak: true});

  api.export('Roles');

  api.addFiles('roles/roles_common.js', both);
  api.addFiles('roles/roles_server.js', 'server');
  api.addFiles(['roles/client/debug.js',
                'roles/client/uiHelpers.js',
                'roles/client/subscriptions.js'], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@1.4.1");

  var both = ['client', 'server'];

  // `accounts-password` is included so `Meteor.users` exists

  api.use(['alanning:roles',
           'accounts-password',
           'underscore',
           'tinytest'], both);

  api.addFiles('roles/tests/client.js', 'client');
  api.addFiles('roles/tests/server.js', 'server');
});
