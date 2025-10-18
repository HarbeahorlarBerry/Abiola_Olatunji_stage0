#Stage 0 _ Backend Wizards Task

## Overview
This project is a simple RESTful API that returns my profile information and a randon cat from the Cat Fact API.

## Endpoints
**GET /me**
Returns:
```json
{
"status":"success",
"user":{
"email":"harbeahorlarberry@gmail.com",
"name":"Abiola Olatunji",
"stack":"Node.js/Express"
},
"timestamp":"2025-10-18T07:55:29.341Z",
"fact":"Cats see six times better in the dark and at night than humans."
}

Tech Stack 

Node.js
Express.js
Axios
dotenv
CORS

## Setup Instructions

1, Clone the repo 

git clone https://github.com/HarbeahorlarBerry/Abiola_Olatunji_stage0

2, Install dependences
npm install

3, create a .env file

PORT = 5000
EMAIL = harbeahorlarberry@gmail.com
NAME = Abiola Olatunji
STACK = Node.js/Express

4, Run Locally 
npm start

Then visit http://localhost:5000/me

What i learned.

How to continue third-party APIs using Axios.
Handling APIs timeouts and fallback responses.
Returning dynamic timestamps and JSON responses.
Structuring a simple REST API with Node.js and Express

Author is Abiola Olatunji
harbeahorlarberry@gmail.com
Backend Stack: Node.js/Express