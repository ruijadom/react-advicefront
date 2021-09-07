import { ButtonType } from '../Button/types'

export interface NavItem {
  active?: boolean
  label: string
  link?: string
}

export interface ActionItem {
  label: string
  onAction?: () => void
  type: ButtonType
}

export interface INavigation {
  navItems: NavItem[]
  actionItems: ActionItem[]
}
