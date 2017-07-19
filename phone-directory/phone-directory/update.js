'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.update = (event, context, callback) => {
    const data = JSON.parse(event.body)
    if (typeof data.name !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Couldn\'t create the contact'));
        return;
    }
    const params = {
        TableName: 'contacts',
        Item: {
            id : event.pathParameters.id,
            name: data.name
        }
    };

    dynamoDb.put(params, (error, result) => {
        
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