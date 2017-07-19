'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.list = (event, context, callback) => {
    const params = {
        TableName: 'contacts',
    };

    dynamoDb.scan(params, (error, result) => {
        
        if (error) {
            console.log(error.message);
            callback(new Error('Couldn\'t create the contact'));
            return;
        }
   
    const response = {
        statusCode: 200,
        body: JSON.stringify(result.Items),
      };
        callback(null,response);
    });
};