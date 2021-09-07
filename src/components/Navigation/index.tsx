import { INavigation, NavItem } from './types'
import { Link, useLocation } from 'react-router-dom'
import Hamburguer from '../../assets/icons/reorder-three.svg'

import { IButton } from '../Button/types'
import Button from '../Button'

const Navigation = ({ navItems, actionItems }: INavigation) => {
  const location = useLocation()
  const { pathname } = location

  const currentItems = navItems?.filter((item) => item?.link !== pathname)

  return (
    <>
      {navItems && (
        <nav className="flex items-center justify-between w-full h-full bg-af-white pr-af-33 pl-af-16 md:pl-af-72">
          <ul className="flex-row hidden md:flex space-x-af-10 md:space-x-af-30">
            {currentItems.map((item: NavItem, index: number) => {
              const { label, link } = item

              return (
                <li
                  key={index}
                  className=" text-af-muted-dark leading-af-24 text-af-14"
                >
                  {link ? (
                    <Link to={link && link}>
                      <p>{label}</p>
                    </Link>
                  ) : (
                    <p className="pointer-events-none">{label}</p>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="block rounded-full cursor-pointer md:hidden hover:bg-gray-100 p-af-10">
            <Hamburguer />
          </div>

          <ul className="flex flex-row space-x-af-10 md:space-x-af-18">
            {actionItems.map((item: IButton, index: number) => {
              return (
                <li key={index}>
                  <Button
                    label={item?.label}
                    type={item?.type}
                    onAction={item?.onAction}
                  />
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </>
  )
}

export default Navigation
