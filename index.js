var AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

var params = {
  Destination: {
    CcAddresses: [
      'charleslapress@gmail.com',
    ],
    ToAddresses: [
      'chuck_l@att.net',
    ]
  },
  Message: {
    Body: {
      Html: {
       Charset: "UTF-8",
       Data: "This would be the body of the text. Blah, blah, blah, blah, blah."
      },
      Text: {
       Charset: "UTF-8",
       Data: "test, test, can you hear me now"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'charleslapress@gmail.com',
  ReplyToAddresses: [
      'charleslapress@gmail.com',
  ],
};

var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
