import * as React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components-core/Loader/Loader';
// @ts-ignore
import { Image } from 'cloudinary-react';
import { TypeApiXferStatus, TypeUser } from '../../types/baseTypes';

type TypeItemProps = {
  user: TypeUser;
};

const UserItem = React.memo((props: TypeItemProps) => {
  const id = props.user.userId.replace('user_', '');
  return (
    <div className="list-item user-list-item">
      <Link to={`/users/${id}`}>
        <div className="image">
          <Image
            cloudName="kevinnayar"
            publicId={`users/${id}.jpg`}
            width="300"
            crop="scale"
            alt={props.user.name}
          />
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

