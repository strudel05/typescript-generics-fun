import React from "react";
import ISorter from "../interfaces/ISorter";

export interface ISortersProps<T> {
  dataSource: Array<T>;
  setSortProperty(property: ISorter<T>): void;
}

export function Sorters<T extends object>(props: ISortersProps<T>) {
  const { dataSource, setSortProperty } = props;
  const object = dataSource.length > 0 ? dataSource[0] : {};

  const makeNormalCase = (str: string): string => {
    if (str === "isBookmarked") {
      return "bookmarked";
    }
    return str.replace(/([A-Z])/g, " $1");
  };

  return (
    <div className="form__section form__sort">
      <label className="label form__sort--label" htmlFor="sorters">
        <span>Sort</span> by property:
      </label>
      <select
        name="sorters"
        id="sorters"
        className="form__sort--select"
        onChange={(e) => {
          const values = e.target.value.split("-");

          if (values.length === 2) {
            setSortProperty({
              property: values[0] as any,
              isDescending: values[1] === "true",
            });
          }
        }}
      >
        {Object.keys(object).map((key) => {
          const normalCaseKey = makeNormalCase(key);
          return (
            <React.Fragment key={key}>
              <option
                className="form__sort--option"
                key={`${key}-false`}
                value={`${key}-false`}
              >
                {`${normalCaseKey}`}
              </option>
              <option
                className="form__sort--option"
                key={`${key}-true`}
                value={`${key}-true`}
              >
                {`${normalCaseKey}`} (descending)
              </option>
            </React.Fragment>
          );
        })}
      </select>
    </div>
  );
}
