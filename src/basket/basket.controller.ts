import {Controller, Inject} from '@nestjs/common';
import {BasketService} from './basket.service';

@Controller('basket')
export class BasketController {
    constructor(
        @Inject(BasketService) private basketService: BasketService,
    ) {
    }
}
