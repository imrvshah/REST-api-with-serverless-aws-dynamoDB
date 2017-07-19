# Simple example to create REST api using Serverless, AWS and DynamoDB

This is the simple example to demonstrate use of [serveless](https://serverless.com/) framework to create rest api with [AWS](https://aws.amazon.com/console/) and DynamoDB

This is inspired by [serverless example](https://github.com/serverless/examples/tree/master/aws-python-rest-api-with-dynamodb) and [video tutorial](https://www.youtube.com/playlist?list=PLIIjEI2fYC-B0QxvWI6XnRB_ze0m0BKUj). Thank You! 

# Getting Started 

First of all you need to set up your aws console and install serverless framework
- [aws console](https://serverless.com/framework/docs/providers/aws/guide/credentials/)   
- [serverless framework](https://www.youtube.com/watch?v=mRkUnA3mEt4&list=PLIIjEI2fYC-C3NJF7a4-Cvh5hjdCmrVmN&index=1)

Once you're familiar with the basic serverless set up, I have included basic rest api example for Phone directory. 
This is very stright forward and do these operations basically CRUD
- GET - It will fetch all the records from table  [List Function]()
- GET by Id - Get particular record from table [Get Function]()
- PUT - Update particular record to table [Update Function]()
- POST - Add data to table [Create Function]()
- DELETE - Delete particular record from table [Delete Function]() 

# Setup 

```
npm install
```

# Deploy

```
serverless deploy
```

# Results 

```
phone-directory $ sls deploy
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (5.37 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
......................................
Serverless: Stack update finished...
Service Information
service: serverless-rest-api
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  POST - https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory
  GET - https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory
  GET - https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory/{id}
  PUT - https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory/{id}
  DELETE - https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory/{id}
functions:
  create: serverless-rest-api-dev-create
  list: serverless-rest-api-dev-list
  get: serverless-rest-api-dev-get
  update: serverless-rest-api-dev-update
  delete: serverless-rest-api-dev-delete
Serverless: Removing old service versions...
```

How to Test/Use created endpoints

# Create Contact 

```
 curl -X POST https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory --data '{"name":"Ravi","phone":123456789}'
```

output 

```
{"id":"18c9fe10-6cb9-11e7-9bf8-39ca1b09a360","name":"Ravi","phone":123456789}
```

# Get Contact list

```
curl https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory
```

output

```
[{"id":"c7fd06d0-68e4-11e7-993a-5b9d3376ae04","name":"Ravi","phone":1231231233},{"id":"c1b568f0-6a7c-11e7-b001-2b151de4eabe","name":"k","phone":1231231233}]
```

# Get Contact by Id 

```
curl https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory/c7fd06d0-68e4-11e7-993a-5b9d3376ae04
```

output 

```
{"id":"c7fd06d0-68e4-11e7-993a-5b9d3376ae04","name":"Ravi","phone":1231231233}
```

# Update Contact 

```
curl -X PUT https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory/c7fd06d0-68e4-11e7-993a-5b9d3376ae04 --data '{"name": "imrvshah", "phone":1111111111}'
```

no output 

# Delete Contact 

```
curl -X DELETE  https://jlt96su3ub.execute-api.us-east-1.amazonaws.com/dev/phone-directory/c7fd06d0-68e4-11e7-993a-5b9d3376ae04
```

output 

```
{}
```

> If tou have any questions, Please contact me [@imrvshah](https://www.twitter.com/imrvshah)
