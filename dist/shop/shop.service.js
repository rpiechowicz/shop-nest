"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const shop_item_entity_1 = require("./shop-item.entity");
let ShopService = class ShopService {
    constructor() {
    }
    async getItems(currentPage = 1) {
        const maxPerPage = 3;
        const [items, totalEntitiesCount] = await shop_item_entity_1.ShopItem.findAndCount({
            skip: maxPerPage * (currentPage - 1),
            take: maxPerPage
        });
        const pages = Math.ceil(totalEntitiesCount / maxPerPage);
        return {
            items,
            pages
        };
    }
    async getItem(id) {
        return shop_item_entity_1.ShopItem.findOneOrFail(id);
    }
    async removeItem(id) {
        return shop_item_entity_1.ShopItem.delete(id);
    }
    async createItem() {
        const newItem = new shop_item_entity_1.ShopItem();
        newItem.name = 'new item';
        newItem.description = 'new desc';
        newItem.price = 1000;
        await newItem.save();
        return newItem;
    }
    async addBoughtCounter(id) {
        await shop_item_entity_1.ShopItem.update(id, {
            boughtCounter: +1
        });
    }
    async findItems(searchTerm) {
        return await shop_item_entity_1.ShopItem.find({
            where: [
                { description: 'dupa' },
                { price: 1000 }
            ]
        });
    }
};
ShopService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map