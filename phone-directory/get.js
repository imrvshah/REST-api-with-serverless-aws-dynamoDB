'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.get = (event, context, callback) => {
    const params = {
        TableName: 'contacts',
        Key: {
            id : event.pathParameters.id
        }
    };

    dynamoDb.get(params, (error, result) => {
        
        if (error) {
            console.log(error.message);
            callback(new Error('Couldn\'t create the contact'));
            return;
        }
   
    const response = {
        statusCode: 200,
        body: JSON.stringify(result.Item),
      };
        callback(null,response);
    });
};