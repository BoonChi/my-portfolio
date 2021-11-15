import React, { useState } from 'react'
import { sideBar } from '../../components/book/sideBar'
import Lists from '../../components/common/Lists'

const List = () => {
  const [clicked, setClicked] = useState(false)
  const [content, setContent] = useState(sideBar)

  const handleClick = () => {
    if (!clicked)
      setContent([
        {
          id: 4,
          name: 'Chi',
        },
        {
          id: 5,
          name: 'Dawid',
        },
      ])
    else setContent(sideBar)
    setClicked(!clicked)
  }

  const handleRemove = (id: ISideBar['id']) => {
    setContent(content.filter((each) => each.id !== id))
  }
  return (
    <div>
      <h1>Learn useState array with Book list</h1>
      {content.map((each: ISideBar) => (
        <div key={each.id}>
          <Lists item={each} />
          <button type='button' onClick={() => handleRemove(each.id)}>
            Remove!
          </button>
        </div>
      ))}
      <button type='button' onClick={() => handleClick()}>
        Change!
      </button>
    </div>
  )
}

export default List
