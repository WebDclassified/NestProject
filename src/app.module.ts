import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres_name',
      password: 'your_password',
      database: 'postgres_name',
      entities: [User],
      synchronize: true,
      ssl: true, 
      extra: {
        ssl: {
          rejectUnauthorized: false, // Adjust based on  SSL requirements
        },
      },
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
