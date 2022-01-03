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
