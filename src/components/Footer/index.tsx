import { Link } from 'react-router-dom'

import TwitterIcon from '../../assets/icons/twitter.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'

import { IFooter, FooterGroupItem } from './types'

import SocialLinks from '../SocialLinks'
import { SocialLink } from '../SocialLinks/types'

const socialLinks: SocialLink[] = [
  {
    link: 'https://twitter.com/',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://www.facebook.com/',
    icon: <FacebookIcon />,
  },
]

const Footer = ({ descripton, footerItems }: IFooter) => {
  return (
    <>
      <div className="flex flex-col w-full h-full py-af-33 px-af-33 md:px-af-72 bg-af-footer">
        <div className="flex flex-col w-full h-full md:flex-row">
          {descripton && (
            <div className="w-full md:w-1/6">
              <div className="w-full md:w-af-94 ">
                <p className="font-normal text-af-14 leading-af-20 text-af-base-medium">
                  {descripton}
                </p>
              </div>
            </div>
          )}

          {footerItems && (
            <>
              {footerItems.map((group: FooterGroupItem, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col md:w-1/6 px-af-0 md:px-af-10"
                  >
                    <h2 className="font-normal text-af-14 leading-af-20 text-af-base">
                      {group?.title}
                    </h2>

                    <ul className="mt-af-16 space-y-af-16">
                      {group.items?.map((item, index) => {
                        const { label, link } = item

                        return (
                          <li
                            key={index}
                            className="font-normal text-af-14 leading-af-20 text-af-base-medium"
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
                      <li></li>
                    </ul>
                  </div>
                )
              })}
            </>
          )}
        </div>

        {socialLinks && <SocialLinks socialLinks={socialLinks} />}
      </div>
    </>
  )
}

export default Footer
