import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Controller('cart')
export class CartController {
  constructor(private readonly httpService: HttpService) { }

  @Get()
  async getList(): Promise<any> {
    const result = await lastValueFrom(
      this.httpService
        .get(`https://dummyjson.com/carts`, {
          headers: { 'Accept-Encoding': 'gzip,deflate,compress' }
        })
        .pipe(map((res) => res.data))
    );

    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<any> {
    const result = await lastValueFrom(
      this.httpService
        .get(`https://dummyjson.com/carts/${id}`, {
          headers: { 'Accept-Encoding': 'gzip,deflate,compress' }
        })
        .pipe(map((res) => res.data))
    );

    return result;
  }
}
