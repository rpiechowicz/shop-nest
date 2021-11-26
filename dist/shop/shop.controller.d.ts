import { ShopService } from './shop.service';
import { GetPaginationListOfProducts, ShopItemInterface } from "../interfaces/shop";
import { DeleteResult } from "typeorm";
export declare class ShopController {
    private shopService;
    constructor(shopService: ShopService);
    getShopList(currentPage: number): Promise<GetPaginationListOfProducts>;
    findItem(searchTerm: string): Promise<ShopItemInterface[]>;
    getShopId(id: string): Promise<ShopItemInterface>;
    removeProduct(id: string): Promise<DeleteResult>;
    createNewProduct(): Promise<ShopItemInterface>;
    increaseBoughtCounter(id: string): Promise<void>;
}
