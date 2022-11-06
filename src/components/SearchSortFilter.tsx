import { Filters } from "./Filters";
import { SearchInput } from "./SearchInput";
import { Sorters } from "./Sorters";
import { PropsWithChildrenFunction } from "../types/PropsWithChildrenFunction";
import IFilter from "../interfaces/IFilter";
import ISorter from "../interfaces/ISorter";
import genericFilter from "../utils/genericFilter";
import genericSearch from "../utils/genericSearch";
import genericSort from "../utils/genericSort";
import { useCallback, useState } from "react";

export interface ISearchSortFilterProps<T> {
  title: string;
  dataSource: Array<T>;
  initialSearchQuery: string;
  searchProperties: Array<keyof T>;
  initialSortProperty: ISorter<T>;
  initialFilterProperties: Array<IFilter<T>>;
}

export interface ISearchSortFilterState<T> {
  searchQuery: string;
  sortProperty: ISorter<T>;
  filterProperties: Array<IFilter<T>>;
}

export function SearchSortFilter<T extends object>(
  props: PropsWithChildrenFunction<ISearchSortFilterProps<T>, T>
) {
  const {
    title,
    dataSource,
    initialSearchQuery,
    searchProperties,
    initialSortProperty,
    initialFilterProperties,
    children,
  } = props;
  const [searchSortFilterState, setSearchSortFilterState] = useState<
    ISearchSortFilterState<T>
  >({
    searchQuery: initialSearchQuery,
    sortProperty: initialSortProperty,
    filterProperties: initialFilterProperties,
  });
  const { searchQuery, sortProperty, filterProperties } = searchSortFilterState;

  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form--flex">
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={useCallback(
              (searchQuery) =>
                setSearchSortFilterState((prevState) => {
                  return { ...prevState, searchQuery };
                }),
              []
            )}
          />
          <Sorters
            dataSource={dataSource}
            setSortProperty={(sortProperty) => {
              setSearchSortFilterState({
                ...searchSortFilterState,
                sortProperty,
              });
            }}
          />
        </div>
        <Filters
          dataSource={dataSource}
          filterProperties={filterProperties}
          setFilterProperties={(filterProperties) =>
            setSearchSortFilterState({
              ...searchSortFilterState,
              filterProperties,
            })
          }
        />
      </form>
      <h3 className="itemlist">List of {title}</h3>
      <ul className={title === "Articles" ? "item" : "item item-people"}>
        {children &&
          dataSource
            .filter((item) =>
              genericSearch(item, searchProperties, searchQuery.toLowerCase())
            )
            .sort((a, b) => genericSort(a, b, sortProperty))
            .filter((item) => genericFilter(item, filterProperties))
            .map((item) => children(item))}
      </ul>
    </>
  );
}
