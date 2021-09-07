export interface FooterItem {
  active?: boolean
  label: string
  link?: string
}

export interface FooterGroupItem {
  title: string
  items?: FooterItem[]
}

export interface IFooter {
  descripton?: React.ReactNode
  footerItems: FooterGroupItem[]
}
