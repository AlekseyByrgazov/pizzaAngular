import { Injectable } from "@angular/core";
import { BaseItemCard, PizzaCard, PizzaTitles } from "../models/types";

@Injectable({providedIn: 'root'})

export class DescriptionService {
    private titles: PizzaTitles = {
        Advantages: ['Самая вкусная пицца в мире', 'только в PizzaCheef'],
        ChoosePizza: ['Выберите свою любимую пиццу'],
        FormGroup: ['Хватит думать!', 'Доставим заказ за 30 минут!']
    }

    private _contentForFormGroup: string = 'Мы гарантированно доставим вашу пиццу за 30 минут с момента оформления заказа. Если мы опоздаем даже на 1 минуту - вы получаете весь заказ бесплатно и ваучер на скидку на следующий заказ. Мы гордимся нашим сервисом и сделаем всё, чтобы наш клиент был доволен и не остался голодный!';
    
    private _allAdvantages: BaseItemCard[] = [
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

    private _allPizza: PizzaCard[] = [
        {
            Title:'Мясная Делюкс',
            ImgSrc: './assets/img/meat-deluxe.png',
            Description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Морская Премиум',
            ImgSrc: './assets/img/sea-premium.png',
            Description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Бекон и Сосиски',
            ImgSrc: './assets/img/bacon-and-grill.png',
            Description: 'Бекон, сыр, сосиски, ананас, томатная паста',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Куриная Делюкс',
            ImgSrc: './assets/img/chicken-deluxe.png',
            Description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Барбекю Премиум',
            ImgSrc: './assets/img/BBQ-premium.png',
            Description: 'Свинина BBQ, соус Барбекю, сыр, курица, соус для пиццы, соус чили',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Пепперони Дабл',
            ImgSrc: './assets/img/pepperoni-double.png',
            Description: 'Пепперони, сыр, колбаса двух видов: обжаренная и вареная',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Куриное Трио',
            ImgSrc: './assets/img/chiken-trio.png',
            Description: 'Жареная курица, тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
            ButtonTittle:'В корзину'
        },
        {
            Title:'Сырная',
            ImgSrc: './assets/img/cheese-pizza.png',
            Description: 'Сыр Джюгас, Сыр с плесенью, Сыр моцарелла, Сыр секретный',
            ButtonTittle:'В корзину'
        },
    ]

    constructor() {}

    public get Titles(): PizzaTitles {
        return this.titles
    }

    public get contentFormGroup(): string {
        return this._contentForFormGroup
    }

    public get contentForAdvantages(): BaseItemCard[] {
        return this._allAdvantages
    }

    public get contentForPizzaCards(): PizzaCard[] {
        return this._allPizza
    }
}

