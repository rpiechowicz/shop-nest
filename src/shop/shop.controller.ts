import {Controller, Delete, Get, Inject, Param, Post} from '@nestjs/common';
import {ShopService} from './shop.service';
import {GetPaginationListOfProducts, ShopItemInterface} from "../interfaces/shop";
import {DeleteResult} from "typeorm";

@Controller('shop')
export class ShopController {
    constructor(
        @Inject(ShopService) private shopService: ShopService,
    ) {
    }

    @Get('/:page')
    getShopList(
        @Param('page') currentPage: number
    ): Promise<GetPaginationListOfProducts> {
        return this.shopService.getItems(currentPage);
    }

    @Get('/find/:searchTerm')
    findItem(
        @Param('searchTerm') searchTerm: string
    ): Promise<ShopItemInterface[]> {
        return this.shopService.findItems(searchTerm);
    }

    @Get('/:id')
    getShopId(
        @Param('id') id: string
    ): Promise<ShopItemInterface> {
        return this.shopService.getItem(id);
    }

    @Delete('/:id')
    removeProduct(
        @Param('id') id: string
    ): Promise<DeleteResult> {
        return this.shopService.removeItem(id)
    }

    @Post('/')
    createNewProduct(): Promise<ShopItemInterface> {
        return this.shopService.createItem()
    }

    @Post('/increase/:id')
    increaseBoughtCounter(
        @Param('id') id: string
    ): Promise<void> {
        return this.shopService.addBoughtCounter(id);
    }
}
