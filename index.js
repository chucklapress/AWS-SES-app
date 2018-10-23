// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params
var params = {
  Destination: { /* required */
    CcAddresses: [
      'charleslapress@gmail.com',
      /* more items */
    ],
    ToAddresses: [
      'chuck_l@att.net',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
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
  Source: 'charleslapress@gmail.com', /* required */
  ReplyToAddresses: [
      'charleslapress@gmail.com',
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
