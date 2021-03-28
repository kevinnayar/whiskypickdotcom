import * as React from 'react';
import { useEffect } from 'react';
import Loader from '../../components-core/Loader/Loader';
import WhiskyList from '../../components/WhiskyList/WhiskyList';
import { TypeApiXferStatus, TypeWhiskyWithMyRating, TypeUser } from '../../types/baseTypes';

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  getUsersAllXferStatus: TypeApiXferStatus;
  user: TypeUser;
  whiskies: TypeWhiskyWithMyRating[];
};

const User = React.memo((props: TypeProps) => {
  if (props.getWhiskiesAllXferStatus.requested || props.getUsersAllXferStatus.requested) {
    return <Loader />;
  }

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  });

  const id = props.user.userId.replace('user_', '');
  const numWhiskies = props.whiskies.length;
  const imgSrc = `https://firebasestorage.googleapis.com/v0/b/whiskey-b6e58.appspot.com/o/users%2F${id}.jpg?alt=media`;
  
  return (
    <>
      <div className="item user-item">
        <div className="image">
          <img src={imgSrc} width="300" alt={props.user.name} />;
        </div>
        <div className="content">
          <div className="content-text">
            <h2>{props.user.name}</h2>
            <h3>
              Rated {numWhiskies} whisk{numWhiskies === 1 ? 'y' : 'ies'}
            </h3>
          </div>
        </div>
      </div>
      <WhiskyList
        getWhiskiesXferStatus={props.getWhiskiesAllXferStatus}
        whiskiesFiltered={props.whiskies}
        embedded
      />
    </>
  );
});

export default User;
