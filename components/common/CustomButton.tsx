import React from 'react'

type Props = {
  buttonName: string
  buttonHandler: () => void
}
const CustomButton: React.FC<Props> = ({ buttonName, buttonHandler }) => {
  return (
    <div>
      <button type='submit' onClick={buttonHandler}>
        {buttonName}
      </button>
    </div>
  )
}

export default CustomButton
