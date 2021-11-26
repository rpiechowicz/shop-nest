import {Injectable} from '@nestjs/common';
import {ShopItem} from "./shop-item.entity";
import {DeleteResult} from "typeorm";
import {GetPaginationListOfProducts, ShopItemInterface} from "../interfaces/shop";

@Injectable()
export class ShopService {
    constructor() {
    }

    // Gotowa paginacja
    async getItems(currentPage: number = 1): Promise<GetPaginationListOfProducts> {
        const maxPerPage = 3;

        const [items, totalEntitiesCount] = await ShopItem.findAndCount({
            skip: maxPerPage * (currentPage - 1),
            take: maxPerPage
        });

        const pages = Math.ceil(totalEntitiesCount / maxPerPage);

        return {
            items,
            pages
        }
    }

    async getItem(id: string): Promise<ShopItemInterface> {
        return ShopItem.findOneOrFail(id)
    }

    async removeItem(id: string): Promise<DeleteResult> {
        return ShopItem.delete(id);
    }

    async createItem(): Promise<ShopItem> {
        const newItem = new ShopItem();
        newItem.name = 'new item';
        newItem.description = 'new desc';
        newItem.price = 1000;

        await newItem.save();

        return newItem;
    }

    async addBoughtCounter(id: string): Promise<void> {
        await ShopItem.update(id, {
            boughtCounter: +1
        });
    }

    async findItems(searchTerm: string): Promise<ShopItemInterface[]> {
        return await ShopItem.find({
            where: [
                {description: 'test'},
                {price: 1000}
            ]
        })
    }
}
