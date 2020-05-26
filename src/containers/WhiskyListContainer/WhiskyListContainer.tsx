import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllWhiskies, updateFilteredWhiskies } from '../../store/whiskies/whiskiesActions';

import WhiskyFilters from '../../components/WhiskyFilters/WhiskyFilters';
import WhiskyList from '../../components/WhiskyList/WhiskyList';

import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeWhisky } from '../../types/baseTypes';

type TypeProps = {
  getWhiskiesXferStatus: TypeApiXferStatus;
  whiskiesAll: TypeWhisky[];
  whiskiesFiltered: TypeWhisky[];
  getAllWhiskies: () => void;
  updateFilteredWhiskies: (whiskies: TypeWhisky[]) => void,
};

function WhiskyListContainer(props: TypeProps) {
  useEffect(() => {
    if (
      !props.getWhiskiesXferStatus.requested &&
      !props.getWhiskiesXferStatus.failed &&
      !props.getWhiskiesXferStatus.succeeded
    ) {
      props.getAllWhiskies();
    }
  }, [props.whiskiesFiltered]);

  return (
    <React.Fragment>
      <WhiskyFilters
        whiskiesAll={props.whiskiesAll}
        whiskiesFiltered={props.whiskiesFiltered}
        updateFilteredWhiskies={props.updateFilteredWhiskies}
      />
      <WhiskyList
        getWhiskiesXferStatus={props.getWhiskiesXferStatus}
        whiskiesFiltered={props.whiskiesFiltered}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state: TypeAppState) {
  return {
    getWhiskiesXferStatus: state.whiskies.getWhiskiesAllXferStatus,
    whiskiesAll: state.whiskies.all,
    whiskiesFiltered: state.whiskies.filtered,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllWhiskies: () => {
      dispatch(getAllWhiskies());
    },
    updateFilteredWhiskies: (whiskies: TypeWhisky[]) => {
      dispatch(updateFilteredWhiskies(whiskies));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhiskyListContainer);