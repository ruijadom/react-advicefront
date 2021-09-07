import { IPost } from './types'
import HeartIcon from '../../assets/icons/heart.svg'

const Post = ({ id, title = '', image = '', likeCount, author }: IPost) => {
  const { avatar, firstName, lastName } = author

  const fullName = `${firstName} ${lastName}`

  return (
    <div className="overflow-hidden">
      <div className="relative cursor-pointer hover-post-trigger h-af-246">
        {image && (
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={`image_${id}`}
          />
        )}

        <div className="absolute bottom-0 flex items-center w-full hover-post-target bg-gradient-to-t from-black h-af-34 py-af-20 px-af-20">
          <div className="flex flex-row items-center justify-between w-full">
            <p className="truncate text-af-inverted text-af-16 leading-af-22">
              {title}
            </p>
            <div className="p-af-9 bg-af-fill-gray rounded-af-8">
              <div className="text-center w-af-16 h-af-13">
                <HeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-af-24 mt-af-8">
        <div className="flex flex-row items-center space-x-af-8">
          {avatar && (
            <div className="text-center w-af-24 h-af-24">
              <img src={avatar} alt={`avatar_${id}`} />
            </div>
          )}
          {fullName && (
            <div className="flex flex-row items-center text-af-14 leading-af-20 text-af-base">
              {fullName}
            </div>
          )}
        </div>

        <div className="flex flex-row items-center space-x-af-4">
          <div className="text-center w-af-14 h-af-11 ">
            <HeartIcon />
          </div>
          {likeCount && (
            <p className="text-af-muted-light text-af-12 leading-af-16">
              {likeCount}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Post
