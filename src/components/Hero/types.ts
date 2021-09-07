import { IButton } from '../Button/types'

export interface HeroImage {
  source?: string
  legend?: string
}

export interface IHero {
  title?: string
  description?: string
  action?: IButton
  image?: HeroImage
}
