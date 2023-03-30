## Technology
```
Nest.js
TypeScript
MySQL
```

## Endpoints

#### Registration
```
POST http://localhost:777/auth/register
body {
  "email": "",
   "password": "" 
}

Response:
{
    "statusCode": ,
    "message": ""
}
```
#### Login
```
POST http://localhost:777/auth/login
body {
  "username": "",
  "password": "" 
}

Response:
{
    "statusCode": ,
    "message": "",
    "access_token": ""
}
```
#### Check user session by cookie
```
GET http://localhost:777/checkUser

Response: 
{
    "statusCode": ,
    "user": {
        "id": ,
        "email": ""
    }
}
```

## Setup

* Change .env.local to .env
* Set up the variables inside .env
* Run application as below


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
