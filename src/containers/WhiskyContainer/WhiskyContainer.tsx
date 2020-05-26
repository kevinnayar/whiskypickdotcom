import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllWhiskies } from '../../store/whiskies/whiskiesActions';
import { getWhiskyById } from '../../utils/baseUtils';
import Whisky from '../../components/Whisky/Whisky';
import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeWhisky } from '../../types/baseTypes';

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  whiskiesAll: TypeWhisky[];
  getAllWhiskies: () => void;
};

function WhiskyContainer(props: TypeProps) {
  const { whiskyId } = useParams();

  useEffect(() => {
    if (
      !props.getWhiskiesAllXferStatus.requested &&
      !props.getWhiskiesAllXferStatus.failed &&
      !props.getWhiskiesAllXferStatus.succeeded
    ) {
      props.getAllWhiskies();
    }
  }, [props.whiskiesAll]);

  if (whiskyId) {
    const whisky = getWhiskyById(props.whiskiesAll, `whisky_${whiskyId}`);
    
    if (whisky) {
      return (
        <Whisky
          getWhiskiesAllXferStatus={props.getWhiskiesAllXferStatus}
          whisky={whisky}
        />
      );
    }
  }

  return null;
}

function mapStateToProps(state: TypeAppState) {
  return {
    getWhiskiesAllXferStatus: state.whiskies.getWhiskiesAllXferStatus,
    whiskiesAll: state.whiskies.all,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllWhiskies: () => {
      dispatch(getAllWhiskies());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhiskyContainer);