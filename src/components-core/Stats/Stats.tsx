import * as React from 'react';

type TypeStatsItem = {
  text: string;
  icon: string;
};

type TypeItemProps = {
  item: TypeStatsItem;
}

const StatsItem = React.memo((props: TypeItemProps) => {
  return (
    <div className="stats-item">
      <i className="material-icons stats-item-icon">{props.item.icon}</i>
      <p className="stats-item-text">{props.item.text}</p>
    </div>
  );
});

type TypeProps = {
  items: TypeStatsItem[];
};

const Stats = React.memo((props: TypeProps) => {
  return (
    <div className="stats">
      {props.items.map(item => <StatsItem key={item.text} item={item} />)}
    </div>
  );
});

export default Stats;
