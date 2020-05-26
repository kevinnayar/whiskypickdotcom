import * as React from 'react';

type TypeProps = {
  rating: number;
};

const Rating = React.memo((props: TypeProps) => {
  const rating: string[] = props.rating
    .toFixed(1)
    .toString()
    .split('.');
  const rNumber = rating[0];
  let rDecimals = rating[1] || '0';
  rDecimals = rDecimals.padEnd(1, '0');

  return (
    <div className="rating">
      <span className="rating-number">
        {rNumber}.{rDecimals}
      </span>
      <span className="rating-pct">%</span>
    </div>
  );
});

export default Rating;
