import { ISocialLinks, SocialLink } from './types'

const SocialLinks = ({ socialLinks }: ISocialLinks) => {
  return (
    <div className="flex flex-row bg-transparent mt-af-20 h-social space-x-af-10">
      {socialLinks.map((links: SocialLink, index: number) => {
        const { link, icon } = links

        return (
          <a key={index} href={link} target="_blank" rel="noreferrer">
            {icon}
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
