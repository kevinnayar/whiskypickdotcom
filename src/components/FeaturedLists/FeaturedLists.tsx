import * as React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components-core/Loader/Loader';
import { WhiskyItem } from '../../components/WhiskyList/WhiskyList';
import { TypeWhisky } from '../../types/baseTypes';
import { filterWhiskies, getTopRatedWhiskies } from '../../utils/baseUtils';

type TypeProps = {
  whiskies: TypeWhisky[];
};

const FeaturedLists = React.memo((props: TypeProps) => {
  if (!props.whiskies.length) {
    return <Loader />;
  }

  const topBourbons = getTopRatedWhiskies(filterWhiskies({ Bourbon: true }, props.whiskies));
  const topIrishes = getTopRatedWhiskies(filterWhiskies({ Irish: true }, props.whiskies));
  const topRyes = getTopRatedWhiskies(filterWhiskies({ Rye: true }, props.whiskies));
  const topScotches = getTopRatedWhiskies(filterWhiskies({ Scotch: true }, props.whiskies));
  const topWhiskies = getTopRatedWhiskies(filterWhiskies({ Whisky: true }, props.whiskies));

  return (
    <div className="list featured-list">
      <h2 className="featured-title">Top Bourbons</h2>
      {topBourbons.map((whisky) => (
        <WhiskyItem key={whisky.whiskyId} whisky={whisky} />
      ))}

      <h2 className="featured-title">Top Irish Whiskies</h2>
      {topIrishes.map((whisky) => (
        <WhiskyItem key={whisky.whiskyId} whisky={whisky} />
      ))}

      <h2 className="featured-title">Top Rye Whiskies</h2>
      {topRyes.map((whisky) => (
        <WhiskyItem key={whisky.whiskyId} whisky={whisky} />
      ))}

      <h2 className="featured-title">Top Scotches</h2>
      {topScotches.map((whisky) => (
        <WhiskyItem key={whisky.whiskyId} whisky={whisky} />
      ))}

      <h2 className="featured-title">Top Generic Single Malts</h2>
      {topWhiskies.map((whisky) => (
        <WhiskyItem key={whisky.whiskyId} whisky={whisky} />
      ))}

      <div className="main-btn">
        <Link to="/whiskies">See All</Link>
      </div>
    </div>
  );
});

export default FeaturedLists;
