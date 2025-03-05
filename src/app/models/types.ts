enum BlocksInSite {
    Advantages = 'Advantages',
    ChoosePizza = 'ChoosePizza',
    FormGroup = 'FormGroup'
}

export type PizzaTitles = Record<BlocksInSite, string[]>

enum BlockOfAdvantages {
    ImgSrc = 'ImgSrc',
    Title = 'Title',
    Description = 'Description'
}
export type BlockOfAdvantage = Record<BlockOfAdvantages, string>