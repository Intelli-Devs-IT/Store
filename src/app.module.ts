import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GoodsModule } from './goods/goods.module';
import { DocumentBuilder } from '@nestjs/swagger'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // your TypeORM configuration here
    }),
    AuthModule,
    GoodsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
