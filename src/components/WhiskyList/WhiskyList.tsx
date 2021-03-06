import * as React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components-core/Loader/Loader';
import Rating from '../../components-core/Rating/Rating';
import { TypeApiXferStatus, TypeWhisky } from '../../types/baseTypes';

type TypeItemProps = {
  whisky: TypeWhisky;
};

export const WhiskyItem = React.memo((props: TypeItemProps) => {
  const id = props.whisky.whiskyId.replace('whisky_', '');
  // @ts-ignore can be TypeWhiskyWithMyRating though not typed as such
  const rating = props.whisky.myRating ? props.whisky.myRating : props.whisky.averageRating;
  const imgSrc = `https://firebasestorage.googleapis.com/v0/b/whiskey-b6e58.appspot.com/o/whiskies%2F${props.whisky.whiskyId}.jpg?alt=media`;
  return (
    <div className="list-item whisky-list-item">
      <Link to={`/whiskies/${id}`}>
        <div className="image">
          <img src={imgSrc} width="300" alt={`${props.whisky.brand} - ${props.whisky.name}`} />
        </div>
        <div className="content">
          <Rating rating={rating} />
          <div className="content-text">
            <h2>{props.whisky.brand}</h2>
            <h3>{props.whisky.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
});

type TypeProps = {
  getWhiskiesXferStatus: TypeApiXferStatus;
  whiskiesFiltered: TypeWhisky[];
  embedded?: boolean;
};

const WhiskyList = React.memo((props: TypeProps) => {
  if (props.getWhiskiesXferStatus.requested) {
    return <Loader />;
  }

  return (
    <div className={`list whisky-list ${props.embedded ? 'embedded' : ''}`}>
      {props.whiskiesFiltered.map(whisky => <WhiskyItem key={whisky.whiskyId} whisky={whisky} />)}
    </div>
  );
});

export default WhiskyList;