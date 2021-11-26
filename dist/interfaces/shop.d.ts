import { ShopItem } from "../shop/shop-item.entity";
export interface ShopItemInterface {
    id: string;
    name: string;
    description: string;
    price: number;
}
export interface GetPaginationListOfProducts {
    items: ShopItem[];
    pages: number;
}
