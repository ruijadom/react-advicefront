import Button from '../Button'
import { IHero } from './types'

const Hero = ({ title = '', description = '', action, image = {} }: IHero) => {
  return (
    <div className="h-af-hero bg-af-hero pt-af-72 pb-af-40 lg:py-af-40">
      <div className="flex flex-col mx-auto lg:flex-row xl:px-0 md:px-af-72 px-af-20 max-w-af-xl space-y-af-30 lg:space-x-af-26">
        <div className="flex flex-col justify-center w-full lg:max-w-af-520 justify-items-center lg:w-1/2">
          {title && (
            <h1 className="text-af-base text-af-48 leading-af-56">{title}</h1>
          )}

          {description && (
            <p className="mt-af-25 text-af-base text-af-16 leading-af-24">
              {description}
            </p>
          )}
          {action && (
            <div className="mt-af-15">
              <Button
                label={action?.label}
                type={action?.type}
                onAction={action?.onAction}
              />
            </div>
          )}
        </div>
        {image && (
          <div className="relative flex flex-col w-full lg:max-w-af-510 lg:w-1/2 space-y-af-20 ">
            <img
              src={image?.source}
              alt="hero_image"
              className="flex object-cover w-full"
            />
            <p className="flex flex-row justify-end text-af-muted-light leading-af-20 text-af-14">
              {image?.legend}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
