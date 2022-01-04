module.exports = {
  "type": "postgres",
  "host": process.env.AMBIENT === 'development' ? process.env.PRODUCTION_POSTGRES_HOST : process.env.DEVELOPMENT_POSTGRES_HOST ,
  "port": 5432,
  "username": process.env.AMBIENT === 'development' ? process.env.PRODUCTION_POSTGRES_USER_NAME : process.env.DEVELOPMENT_POSTGRES_USER_NAME,
  "password": process.env.AMBIENT === 'development' ? process.env.PRODUCTION_POSTGRES_PASSWORD : process.env.DEVELOPMENT_POSTGRES_PASSWORD,
  "database": process.env.AMBIENT === 'development' ? process.env.PRODUCTION_POSTGRES_DATABASE : process.env.DEVELOPMENT_POSTGRES_DATABASE,
  "synchronize": true,
  "entities": [process.env.AMBIENT === "development" ? "src/typeorm/entities/*.ts" : "dist/typeorm/entities/*.js"],
  "migrations": [process.env.AMBIENT === "development" ? "src/typeorm/migrations/*.ts" : "dist/typeorm/migrations/*.js"],
  "seeds": ["src/typeorm/seeds/*.ts"],
  "factories": ["src/typeorm/factories/*.ts"]
}
