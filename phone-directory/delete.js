'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.delete = (event, context, callback) => {
    const params = {
        TableName: 'contacts',
        Key: {
            id : event.pathParameters.id
        }
    };

    dynamoDb.delete(params, (error, result) => {
        
        if (error) {
            console.log(error.message);
            callback(new Error('Couldn\'t create the contact'));
            return;
        }
   
    const response = {
        statusCode: 200,
        body: JSON.stringify({}),
      };
        callback(null,response);
    });
};