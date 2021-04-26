import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('v1/dogs')
export class DogsController {

    constructor(private readonly dogService: DogsService) {

    }

    @Get()
    async getDogsList(@Query() query) {
        return await this.dogService.getDogsList(query)
    }

    @Post()
    async createDog(@Body() body) {
        return await this.dogService.createDog(body)
    }
}
