import React from 'react'

export type Categories = {
  categories: string
}
type AppDataType = {
  categories: Categories | undefined
  // eslint-disable-next-line no-unused-vars
  setCategories: (categories: Categories) => void
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AppData = React.createContext<AppDataType>(undefined!)

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = React.useState<Categories | undefined>(
    undefined
  )
  return (
    <AppData.Provider value={{ categories, setCategories }}>
      {children}
    </AppData.Provider>
  )
}

export const useAppData = () => React.useContext(AppData)
