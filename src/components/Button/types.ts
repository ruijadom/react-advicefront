export type ButtonType = 'primary' | 'secondary' | 'muted'

export interface IButton {
  id?: number
  label: string
  type: ButtonType
  // eslint-disable-next-line no-unused-vars
  onAction?: (e: any) => void
  disabled?: boolean
  className?: string
}
