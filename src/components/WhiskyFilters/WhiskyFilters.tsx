import * as React from 'react';
import { useState } from 'react';
import { TypeWhisky } from '../../types/baseTypes';

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

function updateTypes(type: string, types: { [key: string]: boolean }): { [key: string]: boolean } {
  return { ...types, [type]: !types[type] };
}

function filterWhiskies(types: { [key: string]: boolean }, whiskiesAll: TypeWhisky[]): TypeWhisky[] {
  const filters = Object.keys(types).filter(key => types[key] === true);
  return whiskiesAll.filter((w) => filters.includes(w.type));
}

type TypeSelectorsProps = {
  visible: boolean,
  setVisibility: (visible: boolean) => void,
  types: { [key: string]: boolean },
  setTypes: (types: { [key: string]: boolean }) => void,
  whiskiesAll: TypeWhisky[];
  updateFilteredWhiskies: (whiskies: TypeWhisky[]) => void,
}

function WhiskyFiltersSelectors(props: TypeSelectorsProps) {
  return (
    <div className={`whisky-filters-selectors ${props.visible ? 'visible' : 'hidden'}`}>
      {Object.keys(props.types).map((type) => {
        const isSelected = props.types[type] === true;
        return (
          <div
            className={`type ${isSelected ? 'selected' : 'unselected'}`}
            key={type}
            onClick={(e) => {
              const updatedTypes = updateTypes(type, props.types);
              props.setTypes(updatedTypes);
              const filtered = filterWhiskies(updatedTypes, props.whiskiesAll);
              props.updateFilteredWhiskies(filtered);
            }}
          >
            <i className="material-icons">{isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
            <p>{type}</p>
          </div>
        );
      })}
    </div>
  );
}

type TypeProps = {
  whiskiesAll: TypeWhisky[];
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

  return (
    <div className="whisky-filters">
      <WhiskyFiltersToggle visible={visible} setVisibility={setVisibility} />
      <WhiskyFiltersSelectors
        visible={visible}
        setVisibility={setVisibility}
        types={types}
        setTypes={setTypes}
        whiskiesAll={props.whiskiesAll}
        updateFilteredWhiskies={props.updateFilteredWhiskies}
      />
    </div>
  );
}
