import IArticle from "../../interfaces/IArticle";
import Moment from "react-moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export function ArticleRenderer(props: IArticle) {
  const { id, isBookmarked, title, likes, dislikes, created, updated } = props;

  const convertNumToK = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).toString().concat("K");
    }
    return num.toString();
  };

  return (
    <li className="item__list-item">
      <article
        className={isBookmarked ? "item__card bookmarked" : "item__card"}
      >
        <h3 className="item__card--title">{title}</h3>

        <div className="item__card--details">
          <span className="item__card--likes">
            <AiFillLike size={15} />
            {convertNumToK(likes)}
          </span>
          <span className="item__card--likes dislikes">
            <AiFillDislike size={15} />
            {convertNumToK(dislikes)}
          </span>
          <p>
            Created:&nbsp;
            <Moment fromNow date={created} />
          </p>
          <p>
            Updated:&nbsp;
            <Moment fromNow date={updated} />
          </p>
          <p className="item__card--id">Article ID: {id}</p>
        </div>
      </article>
    </li>
  );
}
