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

let sub = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fzW4b7WGvtc:APA91bGMxqK_qziOe3X76hJsSNI6R5kT_j0JRYyfGCpfYhtuVFy3eLzxwwvc68se-KI_B5ysAwNdu_MtqJ0Ig8C4DAYmuMXC_nowVvTGokRhgBUKmLh15wUrOw7D86kWsvt6TUj5R8NY',
  expirationTime: null,
  keys: {
    p256dh:
      'BJTsRXXJBiXYXrMBbzEdKzZKtFoBAQIZr9tqr94i-3PjiQB5RiQB4j5HqcBH9Abtwwt2ALTijCvpb5FGJqe-DNs',
    auth: 'jQRS8u_hF1tpoFg-jOJNMg',
  },
};

push.sendNotification(sub, 'test message');
