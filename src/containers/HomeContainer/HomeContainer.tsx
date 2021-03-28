import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import FeaturedLists from '../../components/FeaturedLists/FeaturedLists';
import { getAllWhiskies } from '../../store/whiskies/whiskiesActions';
import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeWhisky } from '../../types/baseTypes';

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  whiskiesAll: TypeWhisky[];
  getAllWhiskies: () => void;
};

function HomeContainer(props: TypeProps) {
  useEffect(() => {
    if (
      !props.getWhiskiesAllXferStatus.requested &&
      !props.getWhiskiesAllXferStatus.failed &&
      !props.getWhiskiesAllXferStatus.succeeded
    ) {
      props.getAllWhiskies();
    }
  }, [props.whiskiesAll]);
  
  return <FeaturedLists whiskies={props.whiskiesAll} />;
}

function mapStateToProps(state: TypeAppState) {
  return {
    getWhiskiesAllXferStatus: state.whiskies.getWhiskiesAllXferStatus,
    whiskiesAll: state.whiskies.all,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllWhiskies: () => dispatch(getAllWhiskies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
