import 'reflect-metadata';
import { DataSource } from 'typeorm';
require('dotenv').config();
import path from 'path';

const entities = path.join(__dirname, '/../..', 'app/models/**{.js,.ts}');

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [entities],
  logging: true,
  connectTimeout: 30000
});

AppDataSource.initialize()
  .then(() => {
    console.log('Db connected');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
