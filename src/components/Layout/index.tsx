import React from 'react'

import { ILayout } from './types'

const Layout = ({ header, main, footer }: ILayout) => {
  return (
    <>
      <div className="flex flex-col font-af-helvetica">
        <header className="relative h-header">{header}</header>

        <main className="relative min-h-content">{main}</main>

        <footer className="relative flex items-center bg-af-footer min-h-footer">
          {footer}
        </footer>
      </div>
    </>
  )
}

export default Layout
