import React, { useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { Dispatch } from 'redux'

import { AddArticle } from '../components/article/AddArticle'
import { ViewArticle } from '../components/article/ViewArticle'
import { ViewBook } from '../components/book/ViewBook'
import { addArticle, removeArticle } from '../store/actionCreators'

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      {/* <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <ViewArticle
          article={article}
          key={article.id}
          removeArticle={removeArticle}
        />
      ))} */}
      <ViewBook />
    </main>
  )
}

export default App
