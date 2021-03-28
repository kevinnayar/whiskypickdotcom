import * as React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components-core/Loader/Loader';
import { TypeApiXferStatus, TypeUser } from '../../types/baseTypes';

type TypeItemProps = {
  user: TypeUser;
};

const UserItem = React.memo((props: TypeItemProps) => {
  const id = props.user.userId.replace('user_', '');
  const imgSrc = `https://firebasestorage.googleapis.com/v0/b/whiskey-b6e58.appspot.com/o/users%2F${id}.jpg?alt=media`;
  return (
    <div className="list-item user-list-item">
      <Link to={`/users/${id}`}>
        <div className="image">
          <img src={imgSrc} width="300" alt={props.user.name} />
        </div>
        <div className="content">
          <div className="content-text">
            <h2>{props.user.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
});

type TypeProps = {
  getUsersAllXferStatus: TypeApiXferStatus;
  usersAll: TypeUser[];
};

const UserList = React.memo((props: TypeProps) => {
  if (props.getUsersAllXferStatus.requested) {
    return <Loader />;
  }

  return (
    <div className="list user-list">
      {props.usersAll.map(user => <UserItem key={user.userId} user={user} />)}
    </div>
  );
});

export default UserList;

