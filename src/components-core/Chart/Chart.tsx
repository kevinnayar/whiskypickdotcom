import * as React from 'react';
import { TypeRating } from '../../types/baseTypes';

type TypeProps = {
  ratings: TypeRating[];
};

const Chart = React.memo((props: TypeProps) => {
  const widthDivisor: number = props.ratings.length;
  const heightMultiplier: number = 280;

  return (
    <div className="chart">
      {props.ratings.map(r => {
        const height = heightMultiplier * r.rating / 100;
        return (
          <div key={r.userId} className="datum" style={{ width: `${100 / widthDivisor}%` }}>
            <div
              className="bar"
              style={{
                height: `${height}px`,
                marginTop: `${heightMultiplier - height}px`,
              }}
            >
              <div className="text top">
                {r.rating}
                <span>%</span>
              </div>
              <div className="text bottom">{r.user}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Chart;
