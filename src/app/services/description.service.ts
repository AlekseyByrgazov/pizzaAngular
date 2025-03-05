import { Injectable } from "@angular/core";
import { BlockOfAdvantage, PizzaTitles } from "../models/types";

@Injectable({providedIn: 'root'})

export class DescriptionService {
    private titles: PizzaTitles = {
        Advantages: ['Самая вкусная пицца в мире', 'только в PizzaCheef'],
        ChoosePizza: ['Выберите свою любимую пиццу'],
        FormGroup: ['Хватит думать!', 'Доставим заказ за 30 минут!']
    }

    private contentForFormGroup: string = 'Мы гарантированно доставим вашу пиццу за 30 минут с момента оформления заказа. Если мы опоздаем даже на 1 минуту - вы получаете весь заказ бесплатно и ваучер на скидку на следующий заказ. Мы гордимся нашим сервисом и сделаем всё, чтобы наш клиент был доволен и не остался голодный!';
    
    private allAdvantages: BlockOfAdvantage[] = [
        {
            Title: 'Лучшее тесто',
            ImgSrc:'./assets/img/hop.png',
            Description: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества'
        },
        {
            Title: 'Лучшие повара',
            ImgSrc:'./assets/img/kitchen-pack.png',
            Description: 'Пиццы готовят самые профессиональные итальянские повара'
        },
        {
            Title: 'Гарантия качества',
            ImgSrc:'./assets/img/seo-and-web.png',
            Description: 'Наша пиццерия получила множество наград и признаний по всему миру'
        },
        {
            Title: 'Отборные рецепты',
            ImgSrc:'./assets/img/holidays.png',
            Description: 'Мы используем рецепты от мировых лидеров в изготовлении пиццы'
        },
    ]

    constructor() {}

    public get Titles(): PizzaTitles {
        return this.titles
    }

    public get contentFormGroup(): string {
        return this.contentForFormGroup
    }

    public get contentForAdvantages(): BlockOfAdvantage[] {
        return this.allAdvantages
    }
}

