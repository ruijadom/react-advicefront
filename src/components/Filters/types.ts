export interface IFilters {
  items: string[] | undefined
  value?: any
  active?: boolean
  // eslint-disable-next-line no-unused-vars
  onSelected?: (filter: string) => void
  highlighted?: boolean
}
