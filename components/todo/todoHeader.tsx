import CustomButton from 'components/common/CustomButton'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { Button } from 'react-bootstrap'

type Props = {
  todoAppTitle: string
  handleAdd: (text: string) => void
  addButtonName: string
  userInput: string
  handleChange: (event: FormEvent<HTMLInputElement>) => void
}
const TodoHeader: React.FC<Props> = ({
  todoAppTitle,
  handleAdd,
  addButtonName,
  userInput,
  handleChange,
}) => {
  return (
    <div>
      <h1>{todoAppTitle}</h1>
      <div className={'inline-control-button'}>
        <input
          type='text'
          value={userInput}
          onChange={(event) => handleChange(event)}
          placeholder='Enter todo'
          style={{ marginRight: '20px', borderRadius: '4px' }}
        />
        <Button variant={'success'} onClick={() => handleAdd(userInput)}>
          {addButtonName}
        </Button>
        <Link href={'/'} passHref={true}>
          <a>
            <CustomButton buttonName={'Back'}></CustomButton>
          </a>
        </Link>{' '}
      </div>
    </div>
  )
}

export default TodoHeader
