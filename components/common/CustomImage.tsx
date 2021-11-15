import React from 'react'

type Prop = {
  src: string
  style: string
}
const CommonImage: React.FC<Prop> = ({ src, style }) => {
  return (
    <div>
      <img src={src} alt='' className={style} />
    </div>
  )
}

export default CommonImage
