'use strict'

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.create = (event, context, callback) => {
    const data = JSON.parse(event.body);

    if (typeof data.name !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Couldn\'t create the contact'));
        return;
    }

    if (typeof data.phone !== 'number') {
        console.error('Validation Failed');
        callback(new Error('Couldn\'t create the contact'));
        return;
    }
    const params = {
        TableName: 'contacts',
        Item: {
            id : uuid.v1(),
            name: data.name,
            phone: data.phone,
        },
    };

    dynamoDb.put(params, (error, result) => {
        
        if (error) {
            console.log("error.message");
            console.log(error.message);
            console.log(error.stack);
            callback(new Error('Couldn\'t create the contact'));
            return;
        }
   
    const response = {
        statusCode: 200,
        body: JSON.stringify(params.Item),
      };
        callback(null,response);
    });
};