import React from 'react'

type Props = {
  description: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <p>Description: {description}</p>
    </div>
  )
}

export default Description
