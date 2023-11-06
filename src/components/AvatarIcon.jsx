import React from 'react'

const AvatarIcon = ({status, image}) => {
const style = status === 'Alive' ? 
    "absolute right-0 top-0 block h-4 w-4 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-green-400 ring-2 ring-white":
    "absolute right-0 top-0 block h-4 w-4 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-400 ring-2 ring-white"
  return (
    <span className="relative inline-block">
        <img
            className="h-16 w-16 rounded-md"
            src={image}
            alt=""
        />
        <span className={style} />
    </span>
  )
}

export default AvatarIcon