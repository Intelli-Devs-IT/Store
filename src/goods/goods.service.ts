// src/goods/goods.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Good } from './good.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Good)
    private readonly goodsRepository: Repository<Good>,
  ) {}

  async getAllGoods(): Promise<Good[]> {
    return this.goodsRepository.find();
  }

  async createGood(createGoodDto: Good): Promise<Good> {
    const newGood = this.goodsRepository.create(createGoodDto);
    return this.goodsRepository.save(newGood);
  }
}
