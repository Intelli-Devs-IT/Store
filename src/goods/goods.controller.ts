// src/goods/goods.controller.ts
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Good } from './good.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  getAllGoods(): Promise<Good[]> {
    return this.goodsService.getAllGoods();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  createGood(@Body() createGoodDto: Good): Promise<Good> {
    return this.goodsService.createGood(createGoodDto);
  }
}
