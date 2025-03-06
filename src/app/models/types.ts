enum BlocksInSite {
    Advantages = 'Advantages',
    ChoosePizza = 'ChoosePizza',
    FormGroup = 'FormGroup'
}
export type PizzaTitles = Record<BlocksInSite, string[]>


enum BaseItemKeys {
    ImgSrc = 'ImgSrc',
    Title = 'Title',
    Description = 'Description'
}
export type BaseItemCard = Record<BaseItemKeys, string>

export type PizzaCard = BaseItemCard & {
    ButtonTittle: string
}
export type ItemCard = BaseItemCard | PizzaCard

export interface UserInfo{
    name: string,
    address: string,
    phone: string
}