const entities = process.env.AMBIENT === "development" ? "src/typeorm/entities/*.ts" : "dist/typeorm/entities/*.js"
const migrations = process.env.AMBIENT === "development" ? "src/typeorm/migrations/*.ts" : "dist/typeorm/migrations/*.js"
const userName = process.env.AMBIENT === 'production' ? process.env.PRODUCTION_POSTGRES_USER_NAME : process.env.DEVELOPMENT_POSTGRES_USER_NAME
const password = process.env.AMBIENT === 'production' ? process.env.PRODUCTION_POSTGRES_PASSWORD : process.env.DEVELOPMENT_POSTGRES_PASSWORD
const dataBase =  process.env.AMBIENT === 'production' ? process.env.PRODUCTION_POSTGRES_DATABASE : process.env.DEVELOPMENT_POSTGRES_DATABASE
const host =  process.env.AMBIENT === 'production' ? process.env.PRODUCTION_POSTGRES_HOST : process.env.DEVELOPMENT_POSTGRES_HOST

console.log('userName', userName)
console.log('password', password)
console.log('dataBase', dataBase)
console.log('host', host)

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  // "host": host,
  // "port": 5432,
  // "username": userName,
  // "password":password,
  // "database": dataBase,
  "synchronize": true,
  "entities": [entities],
  "migrations": [migrations],
  "seeds": ["src/typeorm/seeds/*.ts"],
  "factories": ["src/typeorm/factories/*.ts"]
}
