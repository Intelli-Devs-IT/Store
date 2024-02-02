// src/goods/goods.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from './good.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Good])],
})
export class GoodsModule {}
