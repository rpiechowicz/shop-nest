import { ShopItem } from "./shop-item.entity";
import { DeleteResult } from "typeorm";
import { GetPaginationListOfProducts, ShopItemInterface } from "../interfaces/shop";
export declare class ShopService {
    constructor();
    getItems(currentPage?: number): Promise<GetPaginationListOfProducts>;
    getItem(id: string): Promise<ShopItemInterface>;
    removeItem(id: string): Promise<DeleteResult>;
    createItem(): Promise<ShopItem>;
    addBoughtCounter(id: string): Promise<void>;
    findItems(searchTerm: string): Promise<ShopItemInterface[]>;
}
