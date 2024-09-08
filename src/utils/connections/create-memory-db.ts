import 'dotenv/config';
import User from 'src/users/entities/user.entity';

import { DataSource } from 'typeorm';

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

export const dataSource = new DataSource({
  type: 'postgres',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: false,
  logging: ['error'],
  entities: [User],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDataSourceRepository = async (entity: any) => {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  return dataSource.manager.getRepository(entity);
};
