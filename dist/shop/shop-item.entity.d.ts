import { BaseEntity } from 'typeorm';
export declare class ShopItem extends BaseEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    boughtCounter: number;
}
