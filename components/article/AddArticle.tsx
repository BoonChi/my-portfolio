import { FormEvent, useState } from 'react'

type Props = {
  saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>()

  const handleArticleData = (event: FormEvent<HTMLInputElement>) => {
    // const newArticle = {}

    // for(let key of Object.keys(article)) {
    //   newArticle[key] = article[key]
    // }
    // newArticle[event.currentTarget.id] = event.currentTarget.value
    setArticle({
      ...article,
      [event.currentTarget.id]: event.currentTarget.value,
    })
    // use the ...article to have the old value of another key.
  }

  const addNewArticle = (event: FormEvent) => {
    event.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className='Add-article'>
      <input
        type='text'
        name='title'
        id='title'
        placeholder='Enter the title'
        onChange={handleArticleData}
      />
      <input
        type='text'
        name='body'
        id='body'
        placeholder='Enter article description'
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add Article
      </button>
    </form>
  )
}
