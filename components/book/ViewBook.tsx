import React, { MouseEventHandler, useState } from 'react'
import Link from 'next/link'

import bookList from './bookDummyData'
import { sideBar } from './sideBar'
import styles from '../../styles/ViewBook.module.scss'
import logo from '../../public/favicon.ico'
import Title from '../common/Title'
import Description from '../common/Description'
import CommonImage from '../common/CustomImage'
import Lists from '../common/Lists'

export const ViewBook = () => {
  const [buttonState, setButtonState] = useState(true)
  const handlerOnClick = (
    test: number
  ): MouseEventHandler<HTMLButtonElement> => {
    console.log('INSIDE', test)
    return (event) => {
      console.log('ON click', test)
    }
  }

  const handlerOnSwitchState = () => {
    setButtonState(!buttonState)
  }
  return (
    <div className={styles.main}>
      {bookList.map((book: IBook) => (
        <div key={book.id} className={styles.card}>
          <CommonImage src={logo.src} style={styles.logo} />
          <Title {...book} />
          <Description description={book.description} />
          <Link href='/book/list'>
            <a>Article</a>
          </Link>
          <div>
            <button type='button' onClick={handlerOnClick(1)}>
              Click
            </button>
          </div>
          <div>
            <button type='button' onClick={() => handlerOnSwitchState()}>
              Click to switch state
            </button>
            {buttonState ? <h2>Button yeay!</h2> : null}
          </div>
        </div>
      ))}
    </div>
  )
}
