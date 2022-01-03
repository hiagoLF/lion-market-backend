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

###### Products

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
```
