# Lion Market Backend

#### A NodeJs Api built to receive requests from [lion-market](https://github.com/hiagoLF/lion-market) mobile app

<img src='./logo.png' style='max-height: 300px; border-radius: 10px;'/>


- Main Tecnologies
  - express: Framework for server, routes and middlewares generations
  - aws-sdk: AWS Node integration
  - multer: Files Upload
  - multer-s3: FIles Upload to AWS
  - bcrypt: Encrypting passwords
  - celebrate: Middleware for requests validation
  - jsonwebtoken: JWT sessions
  - typeorm: ORM for database
  - pg: Postgres driver for Typeorm

### Running

- First, do not forget to rename env.example to .env and place enviroment variables in it
- The project was built using NodeJs v16.13.1 therefore try to run in the most compatible version

```bash
# Install dependencies
yarn install

# Run the project in dev mode
yarn dev

# Generate a bundle and run in production mode
yarn start

# You can seed your database with fictional data by running the command
yarn seed:run
# This command will generate 1000 products lines in database
```

- The server will be running in port 8001

### Routes

###### User

```js
// User Register
// Endpoint: /user/register
// BODY
{
  login: String,
  password: String
}
// Response
{
  message: "User created",
  user: {
    login: String,
    authorized: false
  }
}


// User Login
// Endpoint: /user/login
// BODY
{
  login: String,
  password: String
}
// Response
{
  token: String
}
```

###### Product

```js
// Find Products Paginated
// Method: GET
// Endpoint: /product
// Query
{
  page: Number
  title: String
}
// Header: token: "Bearer token"
// Response
{
  pagination: {
    currentPage: Number,
    pagesNumber: Number,
  },
  data: {
    id: String
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    created_at: Date
    updated_at: Date;
  }[]
}


// Create Product
// Method: POST
// Endpoint: /product
// Header: token: "Bearer token"
// Body
{
  title: String;
  description: String;
  price: Number;
}
// Response
{
  id: String
}


// Update Product
// Method: PATCH
// Endpoint: /product/:productId
// Header: token: "Bearer token"
// Body
{
  title?: String;
  description?: String;
  price?: Number;
}
// Response: Status 200


// Find Product by Id
// Method: GET
// Endpoint: /product/:productId
// Header: token: "Bearer token"
// Response
{
  id: String
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  created_at: Date
  updated_at: Date;
}


// Delete Product by Id
// Method: DELETE
// Endpoint: /product/:productId
// Header: token: "Bearer token"
// Response: Status 200


// Update Image
// Method: PUT
// Endpoint: /product/image/:productId
// Header: token: "Bearer token"
// Multipart Form
{
  productImage: Image;
}
// Response: Status 200
```
