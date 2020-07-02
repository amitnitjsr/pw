var push = require('web-push');

// let validKeys = push.generateVAPIDKeys();

// console.log(validKeys)

let validKeys = {
    publicKey:
        'BLk9d8QMmyk7FobAS_58ZjYf_vTPgwGu2m9gNAHPGL5LFSRVG3hGv1wO1pvcK-vpSFsTA3WuL4PEBBiuelH-R60',
    privateKey: '2_JlIwtxLqoBCae8FRWbHHctI-bvx17lajZ-a-cSXbk'
}

push.setVapidDetails('amit@gmail.com', validKeys.publicKey, validKeys.privateKey)
let sub = {};
send.sendNotification(sub, 'test message')