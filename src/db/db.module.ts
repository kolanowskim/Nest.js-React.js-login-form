import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';
import { Users } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'codi',
      entities: [Users],
      synchronize: true,
    }),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
