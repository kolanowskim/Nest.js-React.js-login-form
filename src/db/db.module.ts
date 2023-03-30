import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';

const portNumber = Number(process.env.DB_PORT);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: portNumber,
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      entities: [Users],
      synchronize: true,
    }),
  ],
  providers: [],
  exports: [],
})
export class DbModule {}
