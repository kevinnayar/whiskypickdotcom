import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../store/users/usersActions';
import UserList from '../../components/UserList/UserList';
import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeUser } from '../../types/baseTypes';

type TypeProps = {
  getUsersAllXferStatus: TypeApiXferStatus;
  usersAll: TypeUser[];
  getAllUsers: () => void;
};

function UserListContainer(props: TypeProps) {
  useEffect(() => {
    if (
      !props.getUsersAllXferStatus.requested &&
      !props.getUsersAllXferStatus.failed &&
      !props.getUsersAllXferStatus.succeeded
    ) {
      props.getAllUsers();
    }
  }, [props.usersAll]);

  return (
    <UserList
      getUsersAllXferStatus={props.getUsersAllXferStatus}
      usersAll={props.usersAll}
    />
  );
}

function mapStateToProps(state: TypeAppState) {
  return {
    getUsersAllXferStatus: state.users.getUsersAllXferStatus,
    usersAll: state.users.all,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
