import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllWhiskies } from '../../store/whiskies/whiskiesActions';
import { getAllUsers } from '../../store/users/usersActions';
import { getUserById, getWhiskiesForUser } from '../../utils/baseUtils';
import { TypeAppState } from '../../types/reducerTypes';
import { TypeApiXferStatus, TypeWhisky, TypeWhiskyWithMyRating, TypeUser } from '../../types/baseTypes';
import User from '../../components/User/User';

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  whiskiesAll: TypeWhisky[];
  getUsersAllXferStatus: TypeApiXferStatus;
  usersAll: TypeUser[],
  getAllWhiskies: () => void;
  getAllUsers: () => void;
  getUserById: (id: string) => void;
};

function UserContainer(props: TypeProps) {
  // @ts-ignore
  const { userId } = useParams();

  useEffect(() => {
    if (
      !props.getWhiskiesAllXferStatus.requested &&
      !props.getWhiskiesAllXferStatus.failed &&
      !props.getWhiskiesAllXferStatus.succeeded
    ) {
      props.getAllWhiskies();
    }
    if (
      !props.getUsersAllXferStatus.requested &&
      !props.getUsersAllXferStatus.failed &&
      !props.getUsersAllXferStatus.succeeded
    ) {
      props.getAllUsers();
    }
  }, [props.whiskiesAll, props.usersAll]);

  if (userId) {
    const user = getUserById(props.usersAll, `user_${userId}`);
    const whiskies = getWhiskiesForUser(props.whiskiesAll, `user_${userId}`);

    if (user && whiskies)  {
      return (
        <User
          getWhiskiesAllXferStatus={props.getWhiskiesAllXferStatus}
          getUsersAllXferStatus={props.getUsersAllXferStatus}
          user={user}
          whiskies={whiskies}
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
    getUsersAllXferStatus: state.users.getUsersAllXferStatus,
    usersAll: state.users.all,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getAllWhiskies: () => {
      dispatch(getAllWhiskies());
    },
    getAllUsers: () => {
      dispatch(getAllUsers());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
