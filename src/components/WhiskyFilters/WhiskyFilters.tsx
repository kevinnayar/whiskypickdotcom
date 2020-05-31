import * as React from 'react';
import { useState } from 'react';
import { TypeWhisky } from '../../types/baseTypes';
import { 
  sortWhiskies,
  updateTypes,
  filterWhiskies,
  SortTuple,
} from '../../utils/baseUtils';

type TypeToggleProps = {
  visible: boolean,
  setVisibility: (v: boolean) => void,
}

function WhiskyFiltersToggle(props: TypeToggleProps) {
  return (
    <div
      className={`whisky-filters-toggle ${props.visible ? 'visible' : 'hidden'}`}
      onClick={(e) => props.setVisibility(!props.visible)}
    >
      <i className="material-icons">{props.visible ? 'close' : 'menu'}</i>
    </div>
  );
}

type TypeSelectorsProps = {
  visible: boolean,
  setVisibility: (visible: boolean) => void,
  types: { [key: string]: boolean },
  setTypes: (types: { [key: string]: boolean }) => void,
  sort: SortTuple,
  allSorts: SortTuple[],
  setSort: (sort: SortTuple) => void,
  whiskiesAll: TypeWhisky[];
  whiskiesFiltered: TypeWhisky[];
  updateFilteredWhiskies: (whiskies: TypeWhisky[]) => void,
}

function WhiskyFiltersSelectors(props: TypeSelectorsProps) {
  return (
    <div className={`whisky-filters-selectors ${props.visible ? 'visible' : 'hidden'}`}>
      <div className="selectors-group">
        <h2>Filter by</h2>
        {Object.keys(props.types).map((type) => {
          const isSelected = props.types[type] === true;
          return (
            <div
              className={`selector ${isSelected ? 'selected' : 'unselected'}`}
              key={type}
              onClick={(e) => {
                const updatedTypes = updateTypes(type, props.types);
                props.setTypes(updatedTypes);

                const filtered = filterWhiskies(updatedTypes, props.whiskiesAll);
                const sorted = sortWhiskies(props.sort, filtered);
                props.updateFilteredWhiskies(sorted);
              }}
            >
              <i className="material-icons">{isSelected ? 'check_circle' : 'radio_button_unchecked'}</i>
              <p>{type}</p>
            </div>
          );
        })}
      </div>
      <div className="selectors-group">
        <h2>Sort by</h2>
        {props.allSorts.map((sort) => {
          const isSelected = props.sort[0] === sort[0] && props.sort[2] === sort[2];
          return (
            <div
              className={`selector ${isSelected ? 'selected' : 'unselected'}`}
              key={sort[1]}
              onClick={(e) => {
                const sorted = sortWhiskies(sort, props.whiskiesFiltered);
                props.setSort(sort);
                props.updateFilteredWhiskies(sorted);
              }}
            >
              <i className="material-icons">
                {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
              </i>
              <p>{sort[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type TypeProps = {
  whiskiesAll: TypeWhisky[];
  whiskiesFiltered: TypeWhisky[];
  updateFilteredWhiskies: (whiskies: TypeWhisky[]) => void,
};

export default function WhiskyFilters(props: TypeProps) {
  const [visible, setVisibility] = useState(false);
  const [types, setTypes] = useState<{ [key: string]: boolean }>({
    'Bourbon': true,
    'Irish': true,
    'Rye': true,
    'Scotch': true,
    'Whisky': true,
  });
  const allSorts: SortTuple[] = [
    ['averageRating', 'Highest Rated', 'DESC'],
    ['averageRating', 'Lowest Rated', 'ASC'],
    ['price', 'Most Expensive', 'DESC'],
    ['price', 'Cheapest', 'ASC'],
    ['age', 'Oldest Whiskies', 'DESC'],
    ['age', 'Youngest Whiskies', 'ASC'],
  ];
  const [sort, setSort] = useState<SortTuple>(allSorts[0]);

  return (
    <div className="whisky-filters">
      <WhiskyFiltersToggle visible={visible} setVisibility={setVisibility} />
      <WhiskyFiltersSelectors
        visible={visible}
        setVisibility={setVisibility}
        types={types}
        setTypes={setTypes}
        sort={sort}
        allSorts={allSorts}
        setSort={setSort}
        whiskiesAll={props.whiskiesAll}
        whiskiesFiltered={props.whiskiesFiltered}
        updateFilteredWhiskies={props.updateFilteredWhiskies}
      />
    </div>
  );
}
