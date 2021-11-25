import { FormEvent, useState } from "react";

type Props = {
  saveArticle: (article: IArticle | any) => void;
  triggerForbidden: () => void;
};

export const AddArticle: React.FC<Props> = ({
  saveArticle,
  triggerForbidden,
}) => {
  const [article, setArticle] = useState({
    id: "",
    body: "",
    title: "",
  });
  const forbiddenWord = ["fuck", "smash"];
  const handleArticleData = (event: FormEvent<HTMLInputElement>) => {
    // const newArticle = {}

    // for(let key of Object.keys(article)) {
    //   newArticle[key] = article[key]
    // }
    // newArticle[event.currentTarget.id] = event.currentTarget.value
    setArticle({
      ...article,
      [event.currentTarget.id]: event.currentTarget.value,
    });
    // use the ...article to have the old value of another key.
  };

  const addNewArticle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const foundTitle = forbiddenWord.filter((word) =>
    //   article.body.includes(word)
    // );
    // const foundBody = forbiddenWord.filter((word) =>
    //   article.title.includes(word)
    // );
    // console.log(article.body, foundBody, foundTitle);
    // if (foundBody.length > 0 || foundTitle.length > 0)
    //   return triggerForbidden();
    saveArticle(article);
    setArticle({
      id: "",
      body: "",
      title: "",
    });
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter the title"
        onChange={handleArticleData}
        value={article.title}
      />
      <input
        type="text"
        name="body"
        id="body"
        placeholder="Enter article description"
        onChange={handleArticleData}
        value={article.body}
      />
      <button disabled={article === undefined ? true : false}>
        Add Article
      </button>
    </form>
  );
};
