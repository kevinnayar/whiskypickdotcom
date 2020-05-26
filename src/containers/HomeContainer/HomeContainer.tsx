import * as React from 'react';
import { connect } from 'react-redux';
import { getAllWhiskies, getWhiskyById } from '../../store/whiskies/whiskiesActions';
import { getAllUsers, getUserById } from '../../store/users/usersActions';
import { getWhiskiesForUser } from '../../utils/baseUtils';
import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeWhisky, TypeWhiskyWithMyRating, TypeUser } from '../../types/baseTypes';

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  whiskiesAll: TypeWhisky[];
  getWhiskySelectedXferStatus: TypeApiXferStatus;
  whiskySelected: null | TypeWhisky;
  getUsersAllXferStatus: TypeApiXferStatus;
  usersAll: TypeUser[];
  getUserSelectedXferStatus: TypeApiXferStatus;
  userSelected: null | TypeUser;
  getAllWhiskies: () => void;
  getWhiskyById: (id: string) => void;
  getAllUsers: () => void;
  getUserById: (id: string) => void;
};

function HomeContainer(props: TypeProps) {
  let whiskiesForUser: TypeWhiskyWithMyRating[] = [];
  if (!props.getWhiskiesAllXferStatus.requested && !props.getWhiskiesAllXferStatus.failed && !props.getWhiskiesAllXferStatus.succeeded) {
    props.getAllWhiskies();
  }
  if (!props.getWhiskySelectedXferStatus.requested && !props.getWhiskySelectedXferStatus.failed && !props.getWhiskySelectedXferStatus.succeeded) {
    props.getWhiskyById('whisky_akashi-single-malt-whisky');
  }
  if (!props.getUsersAllXferStatus.requested && !props.getUsersAllXferStatus.failed && !props.getUsersAllXferStatus.succeeded) {
    props.getAllUsers();
  }
  if (!props.getUserSelectedXferStatus.requested && !props.getUserSelectedXferStatus.failed && !props.getUserSelectedXferStatus.succeeded) {
    props.getUserById('user_alex-zelenak');
  }
  if (props.getWhiskiesAllXferStatus.succeeded && props.getUserSelectedXferStatus.succeeded && props.userSelected !== null) {
    const { userId } = props.userSelected;
    whiskiesForUser = getWhiskiesForUser(props.whiskiesAll, userId);
    whiskiesForUser = whiskiesForUser.sort((a, b) => {
      if (a.myRating > b.myRating) return -1;
      if (a.myRating < b.myRating) return 1;
      return 0;
    });
  }

  console.log({
    whiskiesAll: props.whiskiesAll,
    whiskySelected: props.whiskySelected,
    usersAll: props.usersAll,
    userSelected: props.userSelected,
    whiskiesForUser,
  });
  return <div />;
}

function mapStateToProps(state: TypeAppState) {
  return {
    getWhiskiesAllXferStatus: state.whiskies.getWhiskiesAllXferStatus,
    whiskiesAll: state.whiskies.all,
    getWhiskySelectedXferStatus: state.whiskies.getWhiskySelectedXferStatus,
    whiskySelected: state.whiskies.selected,
    getUsersAllXferStatus: state.users.getUsersAllXferStatus,
    usersAll: state.users.all,
    getUserSelectedXferStatus: state.users.getUserSelectedXferStatus,
    userSelected: state.users.selected,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllWhiskies: () => {
      dispatch(getAllWhiskies());
    },
    getWhiskyById: (id: string) => {
      dispatch(getWhiskyById(id));
    },
    getAllUsers: () => {
      dispatch(getAllUsers());
    },
    getUserById: (id: string) => {
      dispatch(getUserById(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
