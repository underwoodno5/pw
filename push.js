var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BCWAZE81FASDuG3J_hm52P4IODItOXOap_L5JuaovISoauX89GXBDFFESlgJmEaeSj-U8wN5HN8-X4NzLcoqr2w',
  privateKey: 'y9UKco3HgO5yqqi1k0edGgxAktG55mGAQLWj2gYM_tM',
};

push.setVapidDetails(
  'mailto:test@mail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, 'test message');
