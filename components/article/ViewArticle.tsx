import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import Title from "../common/title/CustomTitle";
import Description from "../common/Description";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const ViewArticle: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="View-Article">
      <Title title={article.title} />
      <Description description={article.body} />
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
