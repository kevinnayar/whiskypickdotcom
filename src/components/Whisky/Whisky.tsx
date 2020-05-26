import * as React from 'react';
import { useEffect } from 'react';
import Loader from '../../components-core/Loader/Loader';
import Chart from '../../components-core/Chart/Chart';
import Rating from '../../components-core/Rating/Rating';
import Stats from '../../components-core/Stats/Stats';
// @ts-ignore
import { Image } from 'cloudinary-react';
import { TypeApiXferStatus, TypeWhisky } from '../../types/baseTypes';

type TypeStatsItem = {
  text: string;
  icon: string;
};

type TypeProps = {
  getWhiskiesAllXferStatus: TypeApiXferStatus;
  whisky: TypeWhisky;
};

const Whisky = React.memo((props: TypeProps) => {
  if (props.getWhiskiesAllXferStatus.requested) {
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

  const statsItems: TypeStatsItem[] = [
    {
      icon: 'local_bar',
      text: `${props.whisky.type}`,
    },
    {
      icon: 'place',
      text: `${props.whisky.origin}`,
    },
    {
      icon: 'watch_later',
      text: `${props.whisky.age} years`,
    },
    {
      icon: 'monetization_on',
      text: `$${props.whisky.price}`,
    },
  ];

  return (
    <div className="item whisky-item">
      <div className="image">
        <Image
          cloudName="kevinnayar"
          publicId={`whiskies/${props.whisky.whiskyId}.jpg`}
          width="300"
          crop="scale"
          alt={`${props.whisky.brand} - ${props.whisky.name}`}
        />
      </div>
      <div className="content">
        <div className="content-text">
          <h2>{props.whisky.brand}</h2>
          <h3>{props.whisky.name}</h3>
        </div>
      </div>
      <Rating rating={props.whisky.averageRating} />
      <Chart ratings={props.whisky.ratings} />
      <Stats items={statsItems} />
    </div>
  );
});

export default Whisky;