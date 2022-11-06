import React from "react";
import IFilter from "../interfaces/IFilter";

export interface IFiltersProps<T> {
  dataSource: Array<T>;
  filterProperties: Array<IFilter<T>>;
  setFilterProperties(property: Array<IFilter<T>>): void;
}

export function Filters<T extends {}>(props: IFiltersProps<T>) {
  const { dataSource, filterProperties, setFilterProperties } = props;
  const object = dataSource.length > 0 ? dataSource[0] : {};

  const onChangeFilter = (property: IFilter<T>) => {
    const partialMatchByProperty = filterProperties.some(
      (filterProperty) => filterProperty.property === property.property
    );
    const fullMatch = filterProperties.some(
      (filterProperty) =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected === property.isTruthySelected
    );

    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        )
      );
    } else if (partialMatchByProperty) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        ),
        property,
      ]);
    } else {
      setFilterProperties([...filterProperties, property]);
    }
  };

  return (
    <div className="form__section form__filter">
      <label htmlFor="filters" className="label form__filter--label">
        <span>Filter</span> by property:
      </label>
      <br />
      <div className="form__filter-grid">
        {Object.keys(object).map((key) => {
          const shorterKey = key === "isBookmarked" ? "Bookmarked" : key;
          return (
            <div className="form__filter-block" key={key}>
              <div className="form__filter form__filter--true">
                <input
                  className="form__filter--input"
                  key={`${key}-true`}
                  type="checkbox"
                  id={`${key}-true`}
                  value={key}
                  onChange={() =>
                    onChangeFilter({
                      property: key as any,
                      isTruthySelected: true,
                    })
                  }
                  checked={filterProperties.some(
                    (property) =>
                      property.property === key && property.isTruthySelected
                  )}
                />
                <label key={`${key}-true-label`} htmlFor={key}>
                  {shorterKey} === true
                </label>
              </div>
              <div className="form__filter form__filter--false">
                <input
                  className="form__filter--input"
                  key={`${key}-false`}
                  type="checkbox"
                  id={`${key}-false`}
                  value={key}
                  onChange={() =>
                    onChangeFilter({
                      property: key as any,
                      isTruthySelected: false,
                    })
                  }
                  checked={filterProperties.some(
                    (property) =>
                      property.property === key && !property.isTruthySelected
                  )}
                />
                <label key={`${key}-false-label`} htmlFor={key}>
                  {shorterKey} === false
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
