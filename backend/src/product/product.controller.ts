import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Controller('product')
export class ProductController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async getList(): Promise<any> {
    const result = await lastValueFrom(
      this.httpService
        .get(`https://dummyjson.com/products`, {})
        .pipe(map((res) => res.data))
    );

    return result;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<any> {
    const result = await lastValueFrom(
      this.httpService
        .get(`https://dummyjson.com/products/${id}`, {})
        .pipe(map((res) => res.data))
    );

    return result;
  }
}
