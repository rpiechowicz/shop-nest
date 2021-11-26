export declare type AddToBasketResponse = {
    isSuccess: true;
    id: string;
} | {
    isSuccess: false;
};
export interface RemoveFromBasketResponse {
    isSuccess: boolean;
}
interface OneItemInBasket {
    id: string;
    count: number;
}
export declare type GetBasketResponse = OneItemInBasket[];
export declare type GetTotalBasketPriceResponse = number;
export interface GetBasketStatsResponse {
    itemInBasketAvgPrice: number;
    basketAvgTotalPrice: number;
}
export {};
