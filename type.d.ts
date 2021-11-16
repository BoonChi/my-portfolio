interface IArticle {
  id: number
  title: string
  body: string
}

type ArticleState = {
  articles: IArticle[]
}

type ArticleAction = {
  type: string
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction

type IBook = {
  title: string
  description: string
  id: number
}

type ISideBar = {
  id: number
  name: string
}
declare module '*.mp3';