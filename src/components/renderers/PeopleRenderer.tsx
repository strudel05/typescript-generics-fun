import IPerson from "../../interfaces/IPerson";
import Moment from "react-moment";
import { FaRegUserCircle } from "react-icons/fa";

export function PeopleRenderer(props: IPerson) {
  const { id, firstName, lastName, eyeColor, birthday, company, address } =
    props;

  return (
    <li className="item__list-item--people">
      <article className="item__card item__card--people">
        <div className="item__card--people-flex">
          <h4>
            {firstName} {lastName}
          </h4>
          <FaRegUserCircle size={25} />
        </div>
        <ul className="item__card--people-details">
          <li>
            <span>Company</span> {company || "N/A"}
          </li>
          <li>
            <span>Residence</span> {address || "N/A"}
          </li>
          <li>
            <span>Eye Color</span> {eyeColor || "N/A"}
          </li>
          <li>
            <span>Birthday</span>
            <Moment format="MMM Do, YYYY" date={birthday} />
          </li>
        </ul>
        <p className="item__card--id people-id">ID: {id}</p>
      </article>
    </li>
  );
}
