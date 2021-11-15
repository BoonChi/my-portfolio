import React from 'react'

type Props = {
  item: ISideBar
}
const Lists: React.FC<Props> = ({ item }) => {
  return <li>List {item.name}</li>
}

export default Lists
