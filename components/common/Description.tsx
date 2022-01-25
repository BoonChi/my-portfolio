import React from 'react'

type Props = {
  description: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <h4 className='normal-font-weight'>{description}</h4>
    </div>
  )
}

export default Description
